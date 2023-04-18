import { of, take, tap } from 'rxjs';

const numeros$ = of(1,2,3,4,5).pipe(
  tap( val => console.log('of', val) )
);

numeros$.pipe(
  tap( t => console.log('tap', t) ),
  take(3)
)
.subscribe({
  next: val => console.log('next', val),
  complete: () => console.log('complete'),
});