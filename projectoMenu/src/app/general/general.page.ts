import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service'

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements OnInit {

  general: any;
  constructor(public service: BackendService) { }

  ngOnInit() {
    this.service.getGeneral().subscribe(data =>{
      this.general = [data];
    });
  }

}
