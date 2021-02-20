let startNumberN = '';
let finishNumberM = '';
let totalSum = 0;
//запускаємо питання
do {
  startNumberN = prompt('Введіть число N');
} while (!parseInt(startNumberN));

do {
  finishNumberM = prompt('Введіть число M');
} while (!parseInt(finishNumberM));

// запитуємось чи пропускати парні
const passEven = confirm('Пропускати парні?');

// цикл
if (+startNumberN < +finishNumberM) {
  for (let i = +startNumberN; i <= +finishNumberM; i++) {
    if (i % 2 === 0 && passEven) {
      continue;
    }
    totalSum += i;
  }
  console.log(`Сума чисел з ${startNumberN} по ${finishNumberM}: ${totalSum}`);
} else {
  console.log('введіть число N менше за число М!');
}
