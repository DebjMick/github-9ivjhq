import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'my-timer',
  templateUrl: '',
  styleUrls: [ '' ]
})
export class TimerComponent  {

  subscription: Subscription;
  intervalId: number;

  /**
   * IMPORTANT NODE
   * ONLY USE EITHER METHOD 1
   * OR METHOD 2
   * DON'T USE BOTH
   */

  ngOnInit() {

    // This is METHOD 1
    const source = interval(1000);
    const text = 'Your Text Here';
    this.subscription = source.subscribe(val => this.opensnack(text));

    // This is METHOD 2
    this.intervalId = setInterval(this.opensnack(text), 1000);

  }


  opensnack(text) {
    // I've just commented this so that you're not bombarded with an alert.
    // alert(text);
    console.log(text);
  }

  ngOnDestroy() {
    // For method 1
    this.subscription && this.subscription.unsubscribe();

    // For method 2
    clearInterval(this.intervalId);
  }


}
