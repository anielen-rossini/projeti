import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SecaoCadastroPage } from './secao-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: SecaoCadastroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SecaoCadastroPage]
})
export class SecaoCadastroPageModule {}
