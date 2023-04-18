import { fromEvent, map, merge } from "rxjs";

const keyup$ = fromEvent( document, 'keyup' );
const click$ = fromEvent( document, 'click' );

merge( 
  keyup$.pipe( map( ({ type }) => ({ type }) ) ), 
  click$.pipe( map( ({ type }) => ({ type }) ) ),
).subscribe( console.log );