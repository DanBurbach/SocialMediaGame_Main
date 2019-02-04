// angular main import
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component page routing import
import { PublicComponent } from './public/public.component';
import { LogInComponent } from './log-in/log-in.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PublicComponent
  },
  {
    path: 'app-log-in',
    component: LogInComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
