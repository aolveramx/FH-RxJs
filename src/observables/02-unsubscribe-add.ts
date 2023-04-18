import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('siguiente', value),
  error: error => console.warn('error', error),
  complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>( subscriber => {

  let count = 0;

  const interval = setInterval(() => {
    count++;
    subscriber.next( count );
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log('Intervalo destruido');
  };

});

const subscription = intervalo$.subscribe( observer );
const subscription2 = intervalo$.subscribe( observer );
const subscription3 = intervalo$.subscribe( observer );

subscription.add( subscription2 )
subscription.add( subscription3 );

setTimeout(() => {
  subscription.unsubscribe();
  // subscription2.unsubscribe();
  // subscription3.unsubscribe();

  console.log('Completado');
}, 3000);