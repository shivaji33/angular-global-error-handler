import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GlobalErrorService } from './global-error.service';
import { ErrorService } from './error.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    ErrorService,
     { provide: ErrorHandler, useClass: GlobalErrorService }
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
