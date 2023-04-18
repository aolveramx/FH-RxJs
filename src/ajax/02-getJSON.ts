import { catchError, map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON( url, {
  'Content-Type': 'application/json',
  'mi-token': 'ABC123Got '
});

obs$.subscribe( data => console.log('data', data) );