import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-gis',
  templateUrl: './gis.page.html',
  styleUrls: ['./gis.page.scss'],
})
export class GISPage implements OnInit {

  gis: any;
  constructor(public service: BackendService) { }

  ngOnInit() {
    this.service.getGis().subscribe(data => {
      this.gis = [data];
    })
  }

}
