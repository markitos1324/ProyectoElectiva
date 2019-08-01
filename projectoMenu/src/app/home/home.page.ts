import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  principal: any;
  constructor(public service: BackendService){  }

  ngOnInit(){
    this.service.getPrincipal().subscribe(data => {
      this.principal = [data];
    });
  }
}