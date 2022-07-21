import bundle from "@/utils/experiment-bundler";

import vertexShaderSource from "./glsl/vert.glsl";
import fragmentShaderSource from "./glsl/frag.glsl";
import createShader from "@/utils/shader-creator";
import createProgram from "@/utils/program-creator";
import { InitializeProp } from "@/types/common";

/* -------------------------------------------------------------------------- */
/*                                   CANVAS                                   */
/* -------------------------------------------------------------------------- */
function initialize({ width, height }: InitializeProp) {
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl2");

  if (!gl) {
    throw new Error("WebGL 2 API not supported");
  }

  // resize screen space and clip space
  canvas.width = width;
  canvas.height = height;
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
  );

  const program = createProgram(gl, vertexShader, fragmentShader);

  const uPositionLoc = gl.getUniformLocation(program, "uPosition");
  const uSize = gl.getUniformLocation(program, 'uSize');

  /* -------------------------------------------------------------------------- */
  /*                                DRAW FUNCTION                               */
  /* -------------------------------------------------------------------------- */
  function draw() {
    if (!gl) {
      throw new Error("WebGL 2 not supported");
    }

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // This is how we switch between different programs and our code won't work if we don't call this since drawArray won't know which vert and frag shader to use
    gl.useProgram(program);

    // gl.bindVertexArray(vao);

    var primitiveType = gl.POINTS;
    var offset = 0;
    var count = 1;

    gl.uniform2fv(uPositionLoc, new Float32Array([0, 0]));
    gl.uniform1f(uSize, 32);
    gl.drawArrays(primitiveType, offset, count);

    gl.uniform2fv(uPositionLoc, new Float32Array([0.5, 0.5]));
    gl.uniform1f(uSize, 64);
    gl.drawArrays(primitiveType, offset, count);
  }

  return { canvas, draw };
}

export default bundle(
  {
    title: "Single Point",
    description:
      "WebGl equivalent of Hello World. Contrary to common books, I am starting with a single point using Uniforms only.",
  },
  initialize
);
