import { map, range, fromEvent, pluck, mapTo } from 'rxjs';

// range(1,5)
//   .pipe(
//     map<number,string>( val => (val * 10).toString() )
//   )
//   .subscribe( console.log );

const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyUpCode$ = keyUp$.pipe(
  map( e => e.code )
);

const keyUpPluck$ = keyUp$.pipe(
  pluck('target', 'baseURI')
);

const keyUpMapTo$ = keyUp$.pipe(
  mapTo('Tecla presionada')
);

keyUpCode$.subscribe( code => console.log('map', code) );
keyUpPluck$.subscribe( code => console.log('pluck', code) );
keyUpMapTo$.subscribe( code => console.log('mapTo', code) );