import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('siguiente', value),
  error: error => console.warn('error', error),
  complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>( subs => {
  const intervalId = setInterval(() => {
    subs.next( Math.random() )
  }, 1000);

  return () => {
    clearInterval(intervalId);
    console.log('Intervalo destruido');
  };
});

const subject$ = new Subject();
const intervalSubject$ = intervalo$.subscribe( subject$ );

//const subs1 = intervalo$.subscribe( rnd => console.log('subs1: ', rnd) );
//const subs2 = intervalo$.subscribe( rnd => console.log('subs2: ', rnd) );

const sub = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  intervalSubject$.unsubscribe();
}, 3500);