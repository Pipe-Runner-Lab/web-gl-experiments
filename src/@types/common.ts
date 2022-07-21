export type MetaData = { title: string; description: string, isAnimated?: boolean };

export type InitializeProp = {
  height: number;
  width: number;
}

export type Experiment = {
  metaData: MetaData,
  initialize: (args: InitializeProp) => {
    canvas: HTMLCanvasElement,
    draw: () => void
  }
}