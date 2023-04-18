import { catchError, exhaustMap, fromEvent, map, mergeMap, of, switchMap, tap } from "rxjs";

import { ajax } from "rxjs/ajax";

// Auxiliar (Helper)
const httpLogin = ( userPass ) => 
  ajax.post( 'https://reqres.in/api/login?delay=1', userPass )
    .pipe(
      map( r => r['response']['token'] ),
      catchError( err => of('XXX') )
    )

// Formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar'

form.append( inputEmail, inputPass, submitBtn );
document.querySelector('body').append( form );

// Streams
const submitForm$ = fromEvent<Event>( form, 'submit' )
  .pipe(
    tap( e => e.preventDefault() ),
    map( e => ({
      email: e.target[0].value,
      password: e.target[1].value
    })),
    //mergeMap( httpLogin )
    //switchMap( httpLogin )
    exhaustMap( httpLogin )
);

submitForm$.subscribe( token => console.log('token', token) );
