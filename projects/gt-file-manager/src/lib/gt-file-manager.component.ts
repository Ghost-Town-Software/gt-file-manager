import {Component} from '@angular/core';
import {of} from 'rxjs';
import {map, toArray} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'gt-file-manager',
  templateUrl: './gt-file-manager.component.html',
  styleUrls: ['./gt-file-manager.styles.scss']
})
export class GtFileManagerComponent {
  images = of(...new Array<number>(10))
    .pipe(
      map(i => `https://picsum.photos/seed/${this.uuid()}/500/400`),
      toArray()
    );

  details: any;

  constructor(private http: HttpClient) {

  }

  show(image) {

  }

  uuid() {
    return Math.random();
  }
}
