import { fromEvent, interval, takeUntil } from 'rxjs';

const btn = document.createElement('button');
btn.innerHTML = 'Detener alerta';
document.querySelector('body').append( btn );

const counter$ = interval(1000);
const click$ = fromEvent<PointerEvent>( btn, 'click' );

counter$.pipe(
  takeUntil( click$ )
)
.subscribe({
  next: val => console.log('next', val),
  complete: () => console.log('complete')
});