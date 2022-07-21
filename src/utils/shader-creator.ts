export default function createShader(
  gl: WebGL2RenderingContext,
  type: number,
  source: string
): WebGLShader {
  // * Creating a shader
  const shader = gl.createShader(type);

  if (!shader) {
    throw new Error("Failed to create shader");
  }

  // * Uploading shader source
  gl.shaderSource(shader, source);

  // * compile shader
  gl.compileShader(shader);

  // * Fetch compilation status
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  
  if (success) {
    return shader;
  }

  // * Print compilation error logs
  console.error(gl.getShaderInfoLog(shader));

  // * Delete unused shader
  gl.deleteShader(shader);

  throw new Error("Failed to compile shader");
}
