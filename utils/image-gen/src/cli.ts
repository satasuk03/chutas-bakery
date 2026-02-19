import fs from 'fs';
import path from 'path';
import readline from 'readline';
import chalk from 'chalk';
import { hasImage, readClipboardImage } from './clipboard.js';
import type { ClipboardImage } from './clipboard.js';
import { generateImages, generateImagesWithReference } from './imagen.js';

const OUTPUT_DIR = './output';

function ensureOutputDir() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
}

function saveImages(images: Array<{ imageBytes: string }>): string[] {
  ensureOutputDir();
  const paths: string[] = [];
  for (let i = 0; i < images.length; i++) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `imagen-${timestamp}-${i + 1}.png`;
    const filepath = path.join(OUTPUT_DIR, filename);
    const buffer = Buffer.from(images[i].imageBytes, 'base64');
    fs.writeFileSync(filepath, buffer);
    paths.push(filepath);
  }
  return paths;
}

function renderPrompt(buffer: string, attachedImage: ClipboardImage | null) {
  const imageIndicator = attachedImage ? chalk.cyan('[image attached] ') : '';
  process.stdout.write(`\r\x1b[K${chalk.green('>')} ${imageIndicator}${buffer}`);
}

export async function runCLI(apiKey: string) {
  readline.emitKeypressEvents(process.stdin);

  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }

  let inputBuffer = '';
  let attachedImage: ClipboardImage | null = null;
  let isGenerating = false;

  console.log(chalk.bold('Google Imagen CLI'));
  console.log(chalk.dim('Type a prompt and press Enter to generate. Ctrl+V to attach clipboard image. Ctrl+C to exit.\n'));

  renderPrompt(inputBuffer, attachedImage);

  async function handleEnter() {
    const prompt = inputBuffer.trim();
    if (!prompt) return;

    if (isGenerating) {
      process.stdout.write('\r\x1b[K' + chalk.yellow('Still generating, please wait...\n'));
      renderPrompt(inputBuffer, attachedImage);
      return;
    }

    isGenerating = true;
    const currentImage = attachedImage;

    // Clear line and show what we're generating
    process.stdout.write('\r\x1b[K');
    console.log(`${chalk.green('>')} ${currentImage ? chalk.cyan('[image attached] ') : ''}${prompt}`);
    console.log(chalk.dim(`  Prompt: "${prompt}"`));
    if (currentImage) {
      console.log(chalk.dim('  Reference image: attached from clipboard'));
    }
    console.log(chalk.dim('  Generating...'));

    // Reset state
    inputBuffer = '';
    attachedImage = null;

    try {
      let images: Array<{ imageBytes: string }>;

      if (currentImage) {
        try {
          images = await generateImagesWithReference(apiKey, prompt, currentImage);
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err);
          console.log(chalk.yellow(`  Reference image failed (${msg}), falling back to text-only...`));
          images = await generateImages(apiKey, prompt);
        }
      } else {
        images = await generateImages(apiKey, prompt);
      }

      if (images.length === 0) {
        console.log(chalk.red('  No images returned from API.'));
      } else {
        const savedPaths = saveImages(images);
        for (const p of savedPaths) {
          console.log(chalk.green(`  Saved: ${p}`));
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.log(chalk.red(`  Error: ${msg}`));
    } finally {
      isGenerating = false;
      console.log('');
      renderPrompt(inputBuffer, attachedImage);
    }
  }

  process.stdin.on('keypress', async (_str: string | undefined, key: readline.Key) => {
    if (!key) return;

    // Ctrl+C — exit
    if (key.ctrl && key.name === 'c') {
      process.stdout.write('\r\x1b[K');
      console.log(chalk.dim('Goodbye.'));
      process.exit(0);
    }

    // Ctrl+V — paste image from clipboard
    if (key.ctrl && key.name === 'v') {
      if (hasImage()) {
        const img = await readClipboardImage();
        if (img) {
          attachedImage = img;
        } else {
          // hasImage() said yes but read failed — no change
        }
      } else {
        // No image in clipboard, treat as regular paste (no-op for now)
      }
      renderPrompt(inputBuffer, attachedImage);
      return;
    }

    // Enter — submit
    if (key.name === 'return' || key.name === 'enter') {
      await handleEnter();
      return;
    }

    // Backspace
    if (key.name === 'backspace') {
      if (inputBuffer.length > 0) {
        inputBuffer = inputBuffer.slice(0, -1);
        renderPrompt(inputBuffer, attachedImage);
      }
      return;
    }

    // Printable characters
    if (_str && !key.ctrl && !key.meta) {
      inputBuffer += _str;
      renderPrompt(inputBuffer, attachedImage);
    }
  });
}
