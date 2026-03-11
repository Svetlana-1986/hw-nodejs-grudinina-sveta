import { argv, exit, stdout, stderr } from "node:process";

function showHelp() {
  stdout.write("Использование: node index.js a b c\n");
  stdout.write("Пример: node index.js 1 -3 2\n");
}

if (argv.length === 2) {
  showHelp();
  exit(1);
}

if (argv.length !== 5) {
  stderr.write("Error: введите три аргумента (a b c)\n");
  exit(2);
}

const a = Number(argv[2]);
const b = Number(argv[3]);
const c = Number(argv[4]);

if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
  stderr.write("Error: аргументы должны быть числами\n");
  exit(5);
}

// D —  дискриминант квадратного уравнения ax² + bx + c = 0
// показывает количество действительных корней
const D = b * b - 4 * a * c;

// нет действительных корней
if (D < 0) {
  stderr.write("Корней нет\n");
  exit(5);
}

// один корень
if (D === 0) {
  const x = -b / (2 * a);
  stdout.write(`Один корень: ${x}\n`);
  exit(0);
}

// два корня
if (D > 0) {
  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  const x2 = (-b - Math.sqrt(D)) / (2 * a);

  stdout.write(`Два корня: ${x1}, ${x2}\n`);
  exit(0);
}
