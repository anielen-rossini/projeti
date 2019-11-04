import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {



  ngOnInit() {
  }
  constructor(private menu: MenuController) { }

  openEnd() {
    this.menu.open('end');
  }

}
