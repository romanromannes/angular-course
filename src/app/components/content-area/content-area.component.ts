import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css'],
})
export class ContentAreaComponent implements OnInit {
  data: Destiny[] = [
    {
      name: 'Paris',
      img: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg?1564742900',
    },
    {
      name: 'New York',
      img: 'https://compartiendoturismo.com/wp-content/uploads/2021/06/Nuevo-museo-en-la-Estatua-de-la-Libertad.jpg',
    },
    {
      name: 'Tokio',
      img: 'https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/japon_tokio_montefuji_shutterstock_756354574_sean_pavone_shutterstock.jpg?itok=3nrPOQvT',
    },
    {
      name: 'Cancun',
      img: 'https://media.staticontent.com/media/pictures/592e3b4d-c987-42b1-8030-a09a21680298',
    },
    {
      name: 'Sidney',
      img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/ee/fc/b6.jpg',
    },
    {
      name: 'London',
      img: 'https://www.viajarlondres.com/img/guia-de-londres.jpg',
    },
    {
      name: 'Roma',
      img: 'https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg',
    },
    {
      name: 'Madrid',
      img: 'https://factormeetings.com/wp-content/uploads/2021/12/1604674609361.jpg',
    },
    {
      name: 'Buenos Aires',
      img: 'https://www.buenosaires.gob.ar/sites/gcaba/files/al_avenida_9_dejulio.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

export interface Destiny {
  name: string;
  img: string;
}
