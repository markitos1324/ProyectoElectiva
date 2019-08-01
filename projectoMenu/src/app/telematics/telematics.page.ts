import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-telematics',
  templateUrl: './telematics.page.html',
  styleUrls: ['./telematics.page.scss'],
})
export class TelematicsPage implements OnInit {

  telematics: any;
  constructor(public service: BackendService) { }

  ngOnInit() {
    this.service.getTelematic().subscribe(data =>{
      this.telematics = [data];
    })
  }

}
