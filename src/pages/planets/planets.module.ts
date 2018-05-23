import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanetsPage } from './planets';

@NgModule({
  declarations: [
    PlanetsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanetsPage),
  ], exports: [
    PlanetsPage
  ]
})
export class PlanetsPageModule {}
