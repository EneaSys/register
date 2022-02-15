import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './modules/registration/component/pagina-1/pagina-1.component';
import { Pagina2Component } from './modules/registration/component/pagina-2/pagina-2.component';
import { RegistrationStep1Component } from './modules/registration/component/registration-step-1/registration-step-1.component';

const routes: Routes = [
	{
		path: 'pagina-1',
		component: Pagina1Component,
	},
	{
		path: 'pagina-2',
		component: Pagina2Component,
	},
	{
		path: 'registration',
		component: RegistrationStep1Component,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
