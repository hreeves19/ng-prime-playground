import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationModule } from './components/navigation/navigation.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardModule } from './components/card/card.module';
import { PersonService } from './services/person.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    CardModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
