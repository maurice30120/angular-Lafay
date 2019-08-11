import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerManagerService {

  constructor() { }


  public  getTimeRemaining(endtime: Date) {
    const t: number =  endtime.getTime() - new Date().getTime();
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);

    return {
      t,
      minutes,
      seconds
    };
  }

}
