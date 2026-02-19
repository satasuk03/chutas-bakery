import { hasImage, getImageBase64 } from '@crosscopy/clipboard';

export type ClipboardImage = {
  base64: string;
  mimeType: 'image/png';
};

export { hasImage };

export async function readClipboardImage(): Promise<ClipboardImage | null> {
  try {
    if (!hasImage()) return null;
    const base64 = await getImageBase64();
    if (!base64) return null;
    return { base64, mimeType: 'image/png' };
  } catch {
    return null;
  }
}
