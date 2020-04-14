import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http :HttpClient ) { }

  loadProduct(){
		return this.http
		.get('http://localhost:8082/products/3');
	}
}
