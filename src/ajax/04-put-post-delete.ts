import { catchError, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.get( url );

ajax.post( url, {
  id: 1,
  nombre: 'Ari'
},
{'mi-token': 'ABC123'})
.subscribe( console.log );

ajax.put( url, {
  id: 1,
  nombre: 'Ari'
},
{'mi-token': 'ABC123'})
.subscribe( console.log );

ajax.delete( url, {'mi-token': 'ABC123'})
.subscribe( console.log );

ajax({
  url,
  method: 'GET',
  headers: {
    'mi-token': 'ABC123'
  },
  body: {
    id: 1,
    nombre: 'Ari'
  }
}).subscribe( console.log );