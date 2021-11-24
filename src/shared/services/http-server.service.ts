import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
baseURL="http://localhost:63312/api/";
  constructor(private HttpClientService:HttpClient) { }
    
  get(controllerName :string):Observable<any>{
    return this.HttpClientService.get(this.baseURL+controllerName);
  }
  post(controllerName:string, data:any ){
    return this.HttpClientService.post(this.baseURL+controllerName,data)
  }
}

