import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageFullScreenPage } from '../image-full-screen/image-full-screen.page';

@Component({
  selector: 'app-pensum',
  templateUrl: './pensum.page.html',
  styleUrls: ['./pensum.page.scss'],
})
export class PensumPage implements OnInit{

  public items= [        
      'sem1',
      'sem2',
      'sem3',
      'sem4',
      'sem5',
      'sem6',
      'sem7',
      'sem8',
      'sem9',
      'sem10',
  ];
  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true
  };
  constructor(private modalController: ModalController) { }
 
  openPreview(img) {
    this.modalController.create({
      component: ImageFullScreenPage,
      componentProps: {
        img: img
      }
    }).then(modal => {
      modal.present();
    });
  }

  ngOnInit(){

  }
}