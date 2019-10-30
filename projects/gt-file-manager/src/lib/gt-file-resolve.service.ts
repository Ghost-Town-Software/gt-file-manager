import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from "rxjs";
import {map, toArray} from "rxjs/operators";

@Injectable()
export class GtFileResolveService {
  readonly baseUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {

  }

  public files(path: any) {
    const url: string = this.baseUrl + '/file/' + path;

    return this.http.get(url);
  }

  public dummySearch(query: string) {
    return of(...new Array<number>(10))
      .pipe(
        map(i => `https://picsum.photos/seed/${Math.random()}/500/400`),
        toArray()
      );
  }

  public search(query: string) {
    let url: string = this.baseUrl + '/search';

    if (query) {
      url += '/' + query;
    }

    return this.http.get(url);
  }

  public upload(file, path: string = null) {
    let url: string = this.baseUrl + '/upload';

    if (path) {
      url += '/' + path;
    }

    return this.http.post(url, file);
  }

  public list(path: string = null) {
    let url: string = this.baseUrl;

    if (path) {
      url += path;
    }

    return this.http.get(url);
  }
}
