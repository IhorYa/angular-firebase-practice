import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {fireBaseConfig} from '../environments/config';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthService} from './services/auth.service';
import { SettingsComponent } from './settings/settings.component';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { MessagesComponent } from './dashboard/messages/messages.component';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    SettingsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(fireBaseConfig, 'agilie-school-chat'),
    RouterModule.forRoot(routes),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
