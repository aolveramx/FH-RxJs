import { Observable, debounceTime, fromEvent, map, mergeAll } from "rxjs";

import { ajax } from "rxjs/ajax";
import { GithubUser, GithubUsersResponse } from '../interfaces/github-users.interface';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Helpers
const showUsers = ( users: GithubUser[] ) => {
  console.log(users);
  orderList.innerHTML = '';

  for( let user of users ) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = user.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.text = 'Go to';
    anchor.target = '_blank';

    li.append( img );
    li.append( user.login + ' ' );
    li.append( anchor );

    orderList.append( li );
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

input$.pipe(
  debounceTime(500),
  map( e => e.target['value'] ),
  map<string, Observable<GithubUsersResponse>>( text =>  ajax.getJSON(
      `https://api.github.com/search/users?q=${ text }`
  )),
  mergeAll(),
  map<GithubUsersResponse, GithubUser[]>( t => t['items'] ),

).subscribe( showUsers );