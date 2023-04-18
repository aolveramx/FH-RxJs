import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";

const click$ = fromEvent<PointerEvent>( document, 'click' );
const interval$ = interval(500).pipe(take(3));

click$.pipe(
  concatMap( () => interval$ )
)
.subscribe( console.log );

