import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  
  public items= [
    {title: 'General',
    //mision vision +relleno
    url: '/general',
    },
    {title: 'Pensum',
    //semestres
      url: '/pensum',
    },
    {title: 'Ubicación',
    //api google escuela maps
      url: '/ubicacion',
    },
    {title: 'Grupos de investigación',
    //lista de grupos de investigacion
      url: '/grupos',
    },
    {title: 'Personal escuela',
    // director, profesores etc.
      url: '/personal',
    },
    {title: 'Informacion de contacto',
    //grupo face y wtp
      url: '/informacion',
    },
  ];
  constructor() {
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
