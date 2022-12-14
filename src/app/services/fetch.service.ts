import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, find, map, take, Observable, of, delay } from 'rxjs';
import { backendEnv } from 'src/enviroments/enviroment';
import { IPost, IUser } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  remaining: number = 5;

  constructor(private http: HttpClient) {}

  fetchPost() {
    return this.http.get<IPost>(backendEnv.postOrigin).pipe(
      filter((value) => value.uid !== 3),
      find((value) => !!~value.body.indexOf('consequuntur')),
      take(1),
      map((value) => {
        return `${value?.title.toUpperCase()} ${value?.body.toUpperCase()}`;
      })
    );
  }

  fetchShip() {
    return this.http.get<any>(backendEnv.swapiOrigin).pipe(
      take(1),
      find((value) => value.length === '120000'),
      filter((value) => !!~value.manufacturer.indexOf('Sienar Fleet Systems')),
      map((value) => {
        return {
          model: value.model,
          class: value.starship_class,
        };
      })
    );
  }

  fetchUser() {
    return this.http.get<IUser>(backendEnv.userOrigin).pipe(
      filter((value) => value.name === 'Leanne Graham'),
      filter((value) => value.username === 'Bret'),
      filter((value) => !!~value.email.indexOf('april.biz')),
      map((value) => {
        return {
          name: value.name,
          username: value.username,
          address: value.address.company,
        };
      })
    );
  }

  fakeFetch(value: number) {
    return of(this.remaining >= value).pipe(delay(1500));
  }
}
