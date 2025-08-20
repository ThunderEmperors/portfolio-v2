// --- noise3D stub until loaded ---
let noise3D = () => 0;

// Load simplex noise dynamically
fetch("https://raw.githubusercontent.com/blindman67/SimplexNoiseJS/master/simplexNoise.js")
  .then((res) => res.text())
  .then((code) => {
    const openSimplexNoise = new Function("return " + code)();
    noise3D = openSimplexNoise(Date.now()).noise3D;
  });

// --- density and color palette ---
const density = "#%*=10";
const colors = ["#03045e", "#0077b6", "#00b4d8", "#90e0ef", "#caf0f8"];

// --- exported program ---
const program = {
  main(coord, context, cursor, buffer) {
    const t = context.time * 0.00009;
    const s = 0.03;
    const x = coord.x * s;
    const y = (coord.y * s) / context.metrics.aspect + t;

    const map = noise3D(x, y, t) * 0.5 + 0.5;
    const i = Math.floor(map * density.length);
    const color = Math.floor(map * colors.length);

    return {
      char: density[i],
      color: colors[color],
    };
  },
};

export default program;
