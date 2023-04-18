import { reduce, interval, take, tap } from 'rxjs';

const numeros = [1,2,3,4,5];

const totalReductor = ( acumulador: number, valorActual: number ) => {
  return acumulador + valorActual;
}

const total = numeros.reduce( totalReductor, 0 );
console.log('total arreglo', total);

interval(1000).pipe(
  take(6), // El primer valor que emite el "interval" es 0
  tap( console.log ),
  reduce( totalReductor )
)
  .subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete')
  });