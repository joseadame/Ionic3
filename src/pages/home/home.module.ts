import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { MenuListComponentModule } from '../../components/menu-list/menu-list.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    MenuListComponentModule
  ],
})
export class HomePageModule {}
