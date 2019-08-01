import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-gimi',
  templateUrl: './gimi.page.html',
  styleUrls: ['./gimi.page.scss'],
})
export class GimiPage implements OnInit {

  gimi: any;
  constructor(public service: BackendService) { }

  ngOnInit() {
    this.service.getGimi().subscribe(data => {
      this.gimi = [data]
      console.log(this.gimi);
    });
  }

}
