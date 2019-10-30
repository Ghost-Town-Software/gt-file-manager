import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {of, Subject} from 'rxjs';
import {debounceTime, map, mapTo, switchAll, switchMap, switchMapTo, takeUntil, toArray} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {GtItem} from "./gt-file.model";
import {GtFileResolveService} from "./gt-file-resolve.service";

@Component({
  selector: 'gt-file-manager',
  templateUrl: './gt-file-manager.component.html',
  styleUrls: ['./gt-file-manager.styles.scss']
})
export class GtFileManagerComponent implements OnInit, OnDestroy {
  files: GtItem[];
  details: any;

  private search$: Subject<string> = new Subject<string>();
  private destroy$: Subject<void> = new Subject<void>();

  private images$: Subject<any> = new Subject();

  constructor(private http: HttpClient, private service: GtFileResolveService) {

  }

  ngOnInit(): void {
    this.service.list().subscribe(res => {
      console.log('res', res);
    })

    this.search$.pipe(
      debounceTime(300),
      switchMap(res => this.service.dummySearch(res)),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      this.images$.next(res);
    });

    this.images$.pipe(
      takeUntil(this.destroy$),
      map(files => {
        const res: GtItem[] = [];

        for (const file of files) {
          console.log('file', file);
          res.push({
            model: file,
            selected: false
          });
        }

        return res;
      }),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      this.files = res;
    });

    of(...new Array<number>(9))
      .pipe(
        map(i => `https://picsum.photos/seed/${this.uuid()}/500/400`),
        toArray(),
        takeUntil(this.destroy$)
      ).subscribe(res => {
      this.images$.next(res);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onInput(event) {
    this.search$.next(event.target.value);
  }

  show(item: GtItem): void {
    item.selected = !item.selected;
  }

  uuid(): number {
    return Math.random();
  }
}
