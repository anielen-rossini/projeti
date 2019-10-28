import { Component } from '@angular/core';
import {Secao} from '../secao/entidade/secao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   secao: Secao = new Secao ();
  constructor(private afAuth: AngularFireAuth, private rota: Router) {}

  logar() {
    this.afAuth.auth.

  }

}
