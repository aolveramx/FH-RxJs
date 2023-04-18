import { catchError, map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

// const url = 'https://api.github.com/useArs?per_page=5';

// const errorHandling = ( res: Response ) => {
//   if( !res.ok ) {
//     throw new Error( res.statusText )
//   }
//   return res;
// };

// const fetchPromise = fetch( url );

// fetchPromise
//   .then( errorHandling )
//   .then( res => res.json() )
//   .then( data => console.log('data: ', data) )
//   .catch( err => console.warn( 'No users' ) )

const url = 'https://api.github.com/usAers?per_page=5';

const errorHandling = ( err: AjaxError ) => {
  console.warn('Error: ', err);
  return of([]);
}

ajax( url ).pipe(
  map( res => res.response ),
  catchError( errorHandling )
)
.subscribe( users => console.log('usuarios', users) );