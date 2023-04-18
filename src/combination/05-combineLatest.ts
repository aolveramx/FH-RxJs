import { combineLatest, fromEvent, map } from "rxjs";

const keyup$ = fromEvent( document, 'keyup' );
const click$ = fromEvent( document, 'click' );

combineLatest( 
  keyup$.pipe( map( ({ type }) => ({ type }) ) ), 
  click$.pipe( map( ({ type }) => ({ type }) ) ),
).subscribe( console.log );