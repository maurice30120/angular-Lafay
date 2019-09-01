import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TimerManagerService {

  constructor() {

  }
  public setTargetSecond(Numbersecond: number): Observable<number> {
    const deadLine = new Date();
    deadLine.setSeconds(deadLine.getSeconds() + Numbersecond);
    const second = this.getSecondRemaining(deadLine);
    return timer(5000);
  }

  public setTargetTime(endtime: Date): Observable<number> {
    const second = this.getSecondRemaining(endtime);
    return timer(second);
    // //output: 0 pour utiliser : 
    // const subscribe = source.subscribe(val => console.log(val));
  }

  private getSecondRemaining(endtime: Date) {
    const t: number = endtime.getTime() - new Date().getTime();
    return Math.floor((t / 1000) % 60);
  }
}
