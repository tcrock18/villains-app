import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { VillainsListPageComponent } from './pages/villains/villains-list-page/villains-list-page.component';
import { VillainsNewPageComponent } from './pages/villains/villains-new-page/villains-new-page.component';
import { VillainsEditVillainPageComponent } from './pages/villains/villains-edit-villain-page/villains-edit-villain-page.component';
import { VillainsDeleteVillainPageComponent } from './pages/villains/villains-delete-villain-page/villains-delete-villain-page.component';
import { VillainsDetailPageComponent } from './pages/villains/villains-detail-page/villains-detail-page.component';
import { PageNotFoundComponent } from './pages/villains/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    VillainsListPageComponent,
    VillainsNewPageComponent,
    VillainsEditVillainPageComponent,
    VillainsDeleteVillainPageComponent,
    VillainsDetailPageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'villains', component: VillainsListPageComponent},
      { path: 'villains/new', component: VillainsNewPageComponent},
      { path: 'villains/edit/:id', component: VillainsEditVillainPageComponent},
      { path: 'villains/delete/:id', component: VillainsDeleteVillainPageComponent},
      { path: 'villains/:id', component: VillainsDetailPageComponent},
      { path: '',
        redirectTo: '/villains',
        pathMatch: 'full'
      },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
