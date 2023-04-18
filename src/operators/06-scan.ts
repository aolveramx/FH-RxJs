import { reduce, from, scan, map } from 'rxjs';

const numeros = [1,2,3,4,5];

const totalAcumulador = (acc, val) => acc + val;

// Reduce
from( numeros ).pipe(
  reduce( totalAcumulador, 0 )
)
  .subscribe( console.log );

// Scan
from( numeros ).pipe(
  scan( totalAcumulador, 0 )
)
  .subscribe( console.log );