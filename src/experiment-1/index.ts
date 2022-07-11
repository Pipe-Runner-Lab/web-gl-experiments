import bundle from "@/utils/experiment-bundler";

/* -------------------------------------------------------------------------- */
/*                                   CANVAS                                   */
/* -------------------------------------------------------------------------- */
const canvas = document.createElement('canvas');

export default bundle(canvas, {title: 'Basic WebGL', subTitle: ''});