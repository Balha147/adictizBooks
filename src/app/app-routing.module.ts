import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "src/app/app.component";
import { AdSearchComponent } from "src/app/ui/ad-search/ad-search.component";
import { AdGallerieComponent } from "src/app/ui/ad-gallerie/ad-gallerie.component";
const routes: Routes = [
   {
    path: 'search',
    component: AdGallerieComponent,
    data: {
      title: 'gallerie Books'
    }
  },
  {
   path: 'home',
  component: AppComponent,
  data: {
    title: 'Adictiz Books'
  },
  
  
}];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
