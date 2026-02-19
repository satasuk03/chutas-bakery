import { GoogleGenAI, RawReferenceImage } from '@google/genai';
import type { ClipboardImage } from './clipboard.js';

export type ImageResult = { imageBytes: string };

export async function generateImages(
  apiKey: string,
  prompt: string,
  config?: { numberOfImages?: number }
): Promise<ImageResult[]> {
  const ai = new GoogleGenAI({ apiKey, vertexai: false });
  // console.log(await ai.models.list())
  const response = await ai.models.generateImages({
    model: 'imagen-4.0-generate-001',
    prompt,
    config: {
      numberOfImages: config?.numberOfImages ?? 1, 
      aspectRatio: '16:9',
      imageSize: '1K',
    },
  });

  const results: ImageResult[] = [];
  for (const img of response.generatedImages ?? []) {
    if (img.image?.imageBytes) {
      results.push({ imageBytes: img.image.imageBytes });
    }
  }
  return results;
}

export async function generateImagesWithReference(
  apiKey: string,
  prompt: string,
  referenceImage: ClipboardImage,
  config?: { numberOfImages?: number }
): Promise<ImageResult[]> {
  const ai = new GoogleGenAI({ apiKey, apiVersion: 'v1alpha' });

  const refImage = new RawReferenceImage();
  refImage.referenceImage = { imageBytes: referenceImage.base64 };
  refImage.referenceId = 0;

  const response = await ai.models.editImage({
    model: 'imagen-3.0-capability-001',
    prompt,
    referenceImages: [refImage],
    config: {
      numberOfImages: config?.numberOfImages ?? 1,
    },
  });

  const results: ImageResult[] = [];
  for (const img of response.generatedImages ?? []) {
    if (img.image?.imageBytes) {
      results.push({ imageBytes: img.image.imageBytes });
    }
  }
  return results;
}
