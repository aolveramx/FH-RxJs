import { throttleTime, fromEvent, pluck, distinctUntilChanged, asyncScheduler } from 'rxjs';

const click$ = fromEvent<PointerEvent>( document, 'click' );

click$.pipe(
  throttleTime(3000)
)
//.subscribe( console.log );

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );

input$.pipe(
  throttleTime(1000, asyncScheduler, {
    leading: true,
    trailing: true
  }),
  pluck( 'target', 'value' ),
  distinctUntilChanged()
)
.subscribe( console.log ); 