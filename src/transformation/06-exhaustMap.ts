import { exhaustMap, fromEvent, interval, take } from "rxjs";

const click$ = fromEvent<PointerEvent>( document, 'click' );
const interval$ = interval(500).pipe(take(3));

click$.pipe(
  exhaustMap( () => interval$ )
)
.subscribe( console.log );