import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Data } from './data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
 
@Injectable()
export class BenjaminPinhornApiService {

	private webClient: HttpClient;

	constructor(webClient: HttpClient) {
		this.webClient = webClient;
	}
 
  getData(): Observable<Data> {
    
  	var headers = new HttpHeaders({
  		'authorization': 'BenjaminPinhorn',
  	});

  	var options = {
  		headers
  	};



  	return this.webClient.get<Data>(
  		'https://benjaminpinhornapi.cfapps.io/api/data',
  		options,);

  }
}