import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardMoudle } from './dashboard/dashboard.module';

@NgModule({
  /*
      Here is the official explanation for CUSTOM_ELEMENTS_SCHEMA from angular.docs:
          "Defines a schema that allows an NgModule to contain the following:
              (1) Non-Angular elements named with dash case (-).
              (2) Element properties named with dash case (-). Dash case is the
                  naming convention for custom elements.""
  */
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DashboardMoudle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
