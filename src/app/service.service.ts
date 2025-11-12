import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() {
  }

  api() {
    return fetch('https://dummyjson.com/quotes/random')
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }
}
