import { of, from } from 'rxjs';

// of - toma argumentos y genera una secuencia de valores
// from = array, promise, interable, obserbable, ...
// El from permite romar casi cualquier cosa y convertirla en un observable

const observer = {
  next: val => console.log('next', val),
  complete: () => console.log('complete')
}

//const source$ = from([1,2,3,4,5]);
//const source$ = of(...[1,2,3,4,5]);
//const source$ = of([1,2,3,4,5]);
//const source$ = from('Ari');

const source$ = from( fetch('https://api.github.com/users/aolveramx') );

//source$.subscribe( obsserver );

// source$.subscribe( async(res) =>{

//   const dataRes = await res.json()
//   console.log(dataRes);
// });

const miGenerador = function*() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const miIterable = miGenerador();

// for (const id of miIterable) {
//   console.log(id);
// }

from( miIterable ).subscribe( observer );