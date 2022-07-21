import { Experiment, InitializeProp, MetaData } from "@/types/common";

export default function bundle(
  metaData: MetaData,
  initialize: (args: InitializeProp) => {
    canvas: HTMLCanvasElement;
    draw: () => void;
  }
): Experiment {
  return {
    metaData,
    initialize,
  };
}
