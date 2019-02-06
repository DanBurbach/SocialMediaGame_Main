// angular main import
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component page routing import
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { ProfileComponent } from './profile/profile.component';
import { LogInComponent } from './log-in/log-in.component';
import { TextComponent } from './text/text.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LogInComponent
  },
  {
    path: 'app-public',
    component: PublicComponent
  },
  {
    path: 'app-private',
    component: PrivateComponent
  },
  {
    path: 'app-profile',
    component: ProfileComponent
  },
  {
    path: 'app-text',
    component: TextComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
