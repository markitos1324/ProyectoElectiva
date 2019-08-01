import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-infelcom',
  templateUrl: './infelcom.page.html',
  styleUrls: ['./infelcom.page.scss'],
})
export class InfelcomPage implements OnInit {

  infelcom: any;
  constructor(public service: BackendService) { }

  ngOnInit() {
    this.service.getInfelcom().subscribe(data => {
      this.infelcom = [data];
    })
  }

}
