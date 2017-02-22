import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { VillainsListPageComponent } from './pages/villains/villains-list-page/villains-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    VillainsListPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'villains', component: VillainsListPageComponent},
      { path: '',
        redirectTo: '/villains',
        pathMatch: 'full'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
