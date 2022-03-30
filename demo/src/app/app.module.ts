import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { CardsComponent } from './cards/cards.component';
import { FeedComponent } from './feed/feed.component';
import { BioComponent } from './bio/bio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';
import { TabsComponent } from './tabs/tabs.component';
import { RoutesModule } from './routes.module';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FeedComponent,
    BioComponent,
    GaleriaComponent,
    PerfilComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RoutesModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
