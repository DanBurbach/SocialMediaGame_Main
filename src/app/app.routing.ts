import { TextComponent } from './text/text.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './image/image.component';
// import { UserPhotosListComponent } from './user-photos-list/user-photos-list.component';
// import { PhotosListComponent } from './photos-list/photos-list.component';



export const appRoutes: Routes = [
  {
    path: '',
    component: TextComponent
  }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
