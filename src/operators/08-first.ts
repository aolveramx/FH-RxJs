import { first, fromEvent, tap, map } from 'rxjs';

const click$ = fromEvent<PointerEvent>( document, 'click' );

click$.pipe(
  tap<PointerEvent>( console.log ),
  // map( event => ({
  //   clientY: event.clientY,
  //   clientX: event.clientX
  // }) )
  map( ({ clientY, clientX }) => ({ clientY, clientX}) ),
  first( e => e.clientY >= 150 )
)
.subscribe({
  next: val => console.log( 'next', val ),
  complete: () => console.log('complete')
});