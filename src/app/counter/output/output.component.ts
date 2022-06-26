import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit, OnDestroy {
  counter!: number;
  counter$!: Observable<{ counter: number }>;
  counterSubscription!: Subscription;

  constructor(
    private store: Store<{ counter: CounterState }>,
    private api: ApiService
  ) {}

  getData() {
    this.api.getEmploye(1).subscribe((res) => {
      return res;
    });
  }

  ngOnInit(): void {
    this.counterSubscription = this.store
      .select('counter')
      .subscribe((data) => {
        const x = this.getData();
        console.log(x, 'x');
        this.counter = data.counter;
      });

    // this.counter$ = this.store.select('counter');
  }

  ngOnDestroy() {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
