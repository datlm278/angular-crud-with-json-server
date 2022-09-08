import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Fruits} from "./fruits";

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Fruits[]>("http://localhost:3000/fruit");
  }

  create(payLoad: Fruits){
    return this.http.post<Fruits>("http://localhost:3000/fruit", payLoad);
  }

  getById(id: number, ) {
    return this.http.get<Fruits>(`http://localhost:3000/fruit/${id}`)
  }

  update(payLoad: Fruits) {
    return this.http.put<Fruits>(`http://localhost:3000/fruit/${payLoad.id}`,payLoad);
  }

  delete(id: number) {
    return this.http.delete<Fruits>(`http://localhost:3000/fruit/${id}`);
  }
}
