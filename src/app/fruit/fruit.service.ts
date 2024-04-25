import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private  httpClient:HttpClient) { }
  getAll(){
    return this.httpClient.get<Fruit[]>('http://localhost:3000/fruits');
  }
  create(data:Fruit){
    return this.httpClient.post<Fruit>('http://localhost:3000/fruits',data);
  }
  update(id: number, data: Fruit) {
    return this.httpClient.put<Fruit>('http://localhost:3000/fruits/' + id, data);
  }

  getById(id: number) {
    return this.httpClient.get<Fruit>('http://localhost:3000/fruits/' + id);
  }
  delete(id: number) {
    return this.httpClient.delete<Fruit>('http://localhost:3000/fruits/' + id);
  }

}
