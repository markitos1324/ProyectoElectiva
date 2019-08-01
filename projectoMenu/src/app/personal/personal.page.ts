import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  profesores: any;

  constructor(public service: BackendService) { }

  ngOnInit() {
    this.service.getProfesores().subscribe(data => {
      this.profesores = [data];
      console.log(this.profesores);
    })
  }

}
