import { catchError, delay, forkJoin, interval, of, take } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'aolveramx';

forkJoin({
  user: ajax.getJSON(
    `${GITHUB_API_URL}/${GITHUB_USER}` 
  ),
  repos: ajax.getJSON(
    `${GITHUB_API_URL}/${GITHUB_USER}/reposA` 
  ).pipe(
    catchError( err => of(err.message) )
  ),
  gists: ajax.getJSON(
    `${GITHUB_API_URL}/${GITHUB_USER}/gists` 
  )
}).pipe(
  catchError( err => of(err.message) )
)
.subscribe( console.log )