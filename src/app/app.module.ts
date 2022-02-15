import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationModule } from './modules/registration/registration.module';

import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
	declarations: [
		AppComponent,

	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RegistrationModule,
		MatMenuModule,
		FlexLayoutModule,


	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
