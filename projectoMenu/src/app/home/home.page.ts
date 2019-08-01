import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  constructor(public service: BackendService){  }

  ngOnInit(){
    this.service.getGeneral().subscribe(data => {
      console.log(data);
    });
  }
}