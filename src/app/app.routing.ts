// angular main import
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component page routing import
import { LogInComponent } from './log-in/log-in.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LogInComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
