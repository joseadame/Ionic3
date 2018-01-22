import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { AboutModule } from '../../components/about/about.module';
import { MenuListComponent } from '../../components/menu-list/menu-list';
import { MenuListComponentModule } from '../../components/menu-list/menu-list.module';

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
    AboutModule,
    MenuListComponentModule
  ],
})
export class AboutPageModule {}
