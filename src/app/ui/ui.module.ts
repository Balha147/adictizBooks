import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdSearchComponent } from './ad-search/ad-search.component';
import { AdGallerieComponent } from './ad-gallerie/ad-gallerie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';
import { LanguagePipe } from '../pipes/language.pipe';
import { AdPopupComponent } from './ad-popup/ad-popup.component';
import { Component, Inject } from '@angular/core';
import {MatDialogModule,MatButtonModule} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialog, MatDialogConfig } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,BrowserAnimationsModule, MatDialogModule,
 MatButtonModule,
  ],
  exports: [LayoutComponent],
  entryComponents: [
 AdPopupComponent
],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, AdSearchComponent, AdGallerieComponent,SearchPipe, LanguagePipe,AdPopupComponent]
})
export class UiModule { }
