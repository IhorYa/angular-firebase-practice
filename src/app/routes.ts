import {AuthComponent} from './auth/auth.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Routes} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';


export const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'settings', component: SettingsComponent}
];
