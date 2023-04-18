import { catchError, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://Ahttpbin.org/delay/1';

const errorHandling = ( res: AjaxError ) => {
  console.warn('err', res.message);
  return of({
    ok: false,
    users: []
  });
};

// const obs$ = ajax.getJSON( url ).pipe(
//   catchError( errorHandling )
// );
// const obs2$ = ajax( url ).pipe(
//   catchError( errorHandling )
// );

const obs$ = ajax.getJSON( url ).pipe(
  catchError( errorHandling )
);
const obs2$ = ajax( url ).pipe(
  catchError( errorHandling )
);

//obs2$.subscribe( data => console.log('ajax', data) );
obs$.pipe(
  catchError( errorHandling )
)
.subscribe({
  next: val => console.log('next: ', val),
  error: err => console.warn('subs error: ', err),
  complete: () => console.log('complete')
});