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
    url: '/general',
    },
    {title: 'Pensum',
      url: '/pensum',
    },
    {title: 'otra que no se que poner',
      url: '/',
    },
    {title: 'alv nos falta 1 mas',
      url: '/',
    },
    {title: 'con 5 vasta no?',
      url: '/',
    },
    {title: 'una mas no hace daño',
      url: '/',
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
