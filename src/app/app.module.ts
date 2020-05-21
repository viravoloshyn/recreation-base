import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RentMapComponent } from './components/rent-map/rent-map.component';
import { RentInfoComponent } from './components/rent-info/rent-info.component';
import { AllServicesComponent } from './components/all-services/all-services.component';
import { SingleServiceComponent } from './components/single-service/single-service.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AncillaryServicesComponent } from './components/ancillary-services/ancillary-services.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import { OrderComponent } from './components/order/order.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    RentMapComponent,
    RentInfoComponent,
    AllServicesComponent,
    SingleServiceComponent,
    ContactsComponent,
    AncillaryServicesComponent,
    MainPageComponent,
    MainMenuComponent,
    OrderComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
