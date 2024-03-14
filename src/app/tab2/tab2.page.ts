import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  date: any = new Date();
  now: any;
  targetDate: Date = new Date(this.date+(30 * 60 * 1000));
  targetTime: any = this.targetDate.getTime();
  difference: number = 0;
  months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  currentTime: any = `${
    this.months[this.targetDate.getMonth()]
  } ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}`;
  stateTimer = true
  refreshIntervalId:any;

  @ViewChild('hours', { static: false }) hours: ElementRef;
  @ViewChild('minutes', { static: false }) minutes: ElementRef;
  @ViewChild('seconds', { static: false }) seconds: ElementRef;

  ngOnInit() {
    this.initTickTock()
  }

  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.hours.nativeElement.innerText = 0;
    this.minutes.nativeElement.innerText = 25 - this.date.getMinutes() ;
    this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  }

  initTickTock(){
    this.refreshIntervalId = setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);
    }, 1000);
  }

  detener(){
    this.stateTimer = false
    clearInterval(this.refreshIntervalId);
  }

  iniciar(){
    this.stateTimer = true
    this.date = new Date();
    this.initTickTock()
  }

  recomendado(){
    this.iniciar()
  }

  ultima(){
    this.iniciar()
  }

}
