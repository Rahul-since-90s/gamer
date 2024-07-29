/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NavBarComponent } from './app/nav-bar/nav-bar.component'


bootstrapApplication(NavBarComponent)
  .catch((err) => console.error(err));
