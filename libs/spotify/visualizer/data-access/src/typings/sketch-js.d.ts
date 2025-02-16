declare module 'sketch-js' {
  export interface Sketch {
    start: () => void;
    stop: () => void;
    toggle: () => void;
    clear: () => void;
    destroy: () => void;
  }

  declare const SketchJS: {
    create: (options) => Sketch;
  };
  export = SketchJS;
}
