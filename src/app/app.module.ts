import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { HttpHelpersService } from './services/helpers/http-helpers/http-helpers.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    HttpClientModule
  ],
  providers: [HttpHelpersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
