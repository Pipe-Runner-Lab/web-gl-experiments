#version 300 es

// an attribute is an input (in) to a vertex shader.
// It will receive data from a buffer
// in vec4 a_position;

uniform vec2 uPosition;
uniform float uSize;

// all shaders have a main function
void main(){
  
  // gl_Position is a special variable a vertex shader
  // is responsible for setting the position of the point
  gl_Position=vec4(uPosition, 0, 1.);
  gl_PointSize=uSize;
}