import { Component, OnInit } from '@angular/core';
import { TimerManagerService } from 'src/service/timer-manager.service';

@Component({
  selector: 'app-bouton-minute',
  templateUrl: './bouton-minute.component.html',
  styleUrls: ['./bouton-minute.component.css']
})
export class BoutonMinuteComponent implements OnInit {

  constructor(private timerService: TimerManagerService) { }

  ngOnInit() {
  }
  onButtonClick() {
    console.log('click motherfucker');
    this.timerService.setTargetSecond(300000).subscribe(val => {
      console.log('go', val);
      this.playAudio();
    });
  }

  playAudio() {
    const audio = new Audio();
    audio.src = '../assets/audio/RedAlert.wav';
    audio.load();
    audio.play();
  }

}
