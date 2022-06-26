import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/shared/api.service';
import { decrement, increment, reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  obj!: CounterState;
  counter: number = 0;
  // getData(){
  //     this.api.postEmploye(1).subscribe((res) => {
  //   console.log('seccess OK', res);
  // });
  // }
  constructor(
    private store: Store<{ counter: CounterState }>,
    private api: ApiService
  ) {}

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement())
  }

  post() {
    this.obj = {
      counter: this.counter,
    };

    this.api.postEmploye(this.obj).subscribe((res) => {
      console.log('seccess OK', res);
    });
  }

  delete(){
    this.api.deleteEmploye(2).subscribe((res)=>{
      console.log('seccess OK item is delete', res);
    })
  }

  onReset() {
    this.store.dispatch(reset());
  }

  ngOnInit(): void {}
}
