let startNumberN = '';
let finishNumberM = '';
let totalSum = 0;
//запускаємо питання
do {
  startNumberN = prompt('Введіть число N');
} while ( !parseInt(startNumberN));

do {
  finishNumberM = prompt('Введіть число M');
} while (!parseInt(finishNumberM));

let parseStartNumberN = parseInt(startNumberN);
let parseFinishNumberM = parseInt(finishNumberM);


// запитуємось чи пропускати парні
const passEven = confirm('Пропускати парні?');

// цикл
if (parseStartNumberN < parseFinishNumberM) {
  for (let i = parseStartNumberN; i <= parseFinishNumberM; i++) {
    if (i % 2 === 0 && passEven) {
      continue;
    }
    totalSum += i;
  }
  console.log(`Сума чисел з ${parseStartNumberN} по ${parseFinishNumberM}: ${totalSum}`);
} else {
  console.log('введіть число N менше за число М!');
}
