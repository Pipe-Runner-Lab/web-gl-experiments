import { MetaData } from "@/types/common";

export default function bundle(
  canvas: HTMLCanvasElement,
  metaData: MetaData
): {
  canvas: HTMLCanvasElement;
  metaData: MetaData
} {
  return {
    canvas,
    metaData,
  };
}
