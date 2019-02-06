// angular main import files
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// main import files
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { masterFirebaseConfig } from './api-keys';
import { routing } from './app.routing';

// authorization import files
import { AuthGuard } from './auth-guard/auth-guard.service';
import { AuthenticationService } from './authentication/authentication.service';

// component import files
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { ProfileComponent } from './profile/profile.component';
import { LogInComponent } from './log-in/log-in.component';
import { FeedComponent } from './feed/feed.component';
import { UiComponent } from './ui/ui.component';
import { VideoComponent } from './video/video.component';

//Services
import { YoutubeService} from './youtube.service';
import { VideoFbService } from './video-fb.service'

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    LogInComponent,
    ProfileComponent,
    FeedComponent,
    UiComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule,
    routing
  ],
  providers: [AuthGuard, AuthenticationService,YoutubeService, VideoFbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
