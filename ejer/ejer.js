function newtonRaphson(f, df, x0, tol, maxIter) {
  let x = x0;
  let xPrev;
  let i = 0;

  do {
    xPrev = x;
    x = xPrev - f(xPrev) / df(xPrev);
    i++;
  } while (Math.abs(x - xPrev) > tol && i < maxIter);

  return x;
}

// Definimos la función que representa nuestra ecuación y su derivada
const k1 = 50000; // g/s^2
const k2 = 40; // g/(s^2 * m^0.5)
const m = 90; // g
const g = 9.81; // m/s^2
const h = 0.45; // m

// f(d) = (2/5)*k2*d^(3/2) + (1/2)*k1*d^2 - mgd - mgh
function f(d) {
  return (2/5)*k2*Math.pow(d, 1.5) + (1/2)*k1*Math.pow(d, 2) - m*g*d - m*g*h;
}

// f'(d) = (3/5)*k2*d^(1/2) + k1*d - mg
function df(d) {
  return (3/5)*k2*Math.sqrt(d) + k1*d - m*g;
}

// Aplicamos el método de Newton-Raphson
const d0 = 0.1; // Un valor inicial para d
const tolerance = 1e-6; // Tolerancia para la convergencia
const maxIterations = 100; // Número máximo de iteraciones

const d = newtonRaphson(f, df, d0, tolerance, maxIterations);

console.log(`La deflexión d del resorte es aproximadamente: ${d} metros.`);
