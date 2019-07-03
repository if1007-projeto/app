import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-myservice',
  templateUrl: './myservice.component.html',
  styleUrls: ['./myservice.component.css']
})
export class MyserviceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  videoPlayer: HTMLVideoElement;

  @ViewChild('videoPlayer') videoplayer: ElementRef;

  toggleVideo(event: any) {
  this.videoplayer.nativeElement.play();
}
}
