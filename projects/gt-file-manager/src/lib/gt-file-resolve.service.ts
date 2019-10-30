import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GtFileResolveService {
  constructor(private http: HttpClient) {

  }

  public getFiles(param: any = null) {
    this.http.get('http://localhost:3000/');
  }
}
