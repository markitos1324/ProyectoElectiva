import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-full-screen',
  templateUrl: './image-full-screen.page.html',
  styleUrls: ['./image-full-screen.page.scss'],
})
export class ImageFullScreenPage implements OnInit {

  @ViewChild('slider', { read: ElementRef })slider: ElementRef;
  img: any;

  sliderOpts = {
    zoom: {
      maxRatio: 5
    }
  };

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.img = this.navParams.get('img');
  }

  zoom(zoomIn: boolean) {
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    } else {
      zoom.out();
    }
  }

  close() {
    this.modalController.dismiss();
  }


}
