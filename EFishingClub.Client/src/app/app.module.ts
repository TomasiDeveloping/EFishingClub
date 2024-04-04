import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MaterialModule} from "./modules/material.module";
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DarkLightSwitchComponent } from './navigation/dark-light-switch/dark-light-switch.component';
import { LanguageComponent } from './navigation/language/language.component';
import {HttpClientModule} from "@angular/common/http";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {ThirdPartyModule} from "./modules/third-party.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    SidenavListComponent,
    DarkLightSwitchComponent,
    LanguageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ThirdPartyModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
