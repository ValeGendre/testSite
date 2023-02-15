import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PainService {

  douleur$ = new BehaviorSubject('')

  showPain(inputText:string) {
    this.douleur$.next(inputText)
  }


  constructor() { }
}
