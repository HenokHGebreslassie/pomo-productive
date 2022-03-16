import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodro',
  templateUrl: './pomodro.component.html',
  styleUrls: ['./pomodro.component.scss']
})
export class PomodroComponent implements OnInit {

  date: Date = new Date()
  keys: any = {
    shortBreak: '5:00',
    longBreak: '15:00',
    pomodro: '25:00'
  }
  activeLink: string = ''
  key: string = 'pomodro'
  toggleControlBtn: string = 'stopped'
  interval: any = null


  constructor() { }

  ngOnInit(): void {
  }

  startTimer(duration: number) {
    let start = Date.now(), diff, minutes, seconds;

     const timer = () => {
        diff = duration - (((Date.now() - start) / 1000) | 0);

        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       this.keys[this.key] = minutes + ":" + seconds; 

        if (diff <= 0) {
            this.handleClearInterval()
        }
    };

    timer();
    this.interval = setInterval(timer, 1000);
  }

  setPomodro() {
    this.startTimer(60 * 25)
  }

  setShortBreak() {
    this.startTimer(60 * 5)
  }

  setLongBreak() {
    this.startTimer(60 * 15)
  }

  handleClearInterval() {
    this.toggleControlBtn = 'stopped'
    clearInterval(this.interval)
  }

  handleStartTimer() {
    this.handleClearInterval()
    this.toggleControlBtn = 'started'
    
    if (this.key == 'pomodro') {
      this.setPomodro()
    } else if (this.key == 'shortBreak') {
      this.setShortBreak()
    } else if (this.key == 'longBreak') {
      this.setLongBreak()
    }
  }

  setTab(key: string) {
    this.key = key 
  }
}
