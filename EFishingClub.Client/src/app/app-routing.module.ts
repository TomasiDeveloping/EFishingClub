import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {FishingRegulationsComponent} from "./pages/fishing-regulations/fishing-regulations.component";
import {ClosedSeasonComponent} from "./pages/closed-season/closed-season.component";
import {LicenseComponent} from "./pages/license/license.component";
import {FishingDayComponent} from "./pages/fishing-day/fishing-day.component";
import {CatchStatisticsComponent} from "./pages/catch-statistics/catch-statistics.component";
import {AccountComponent} from "./pages/account/account.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'fishing-regulations', component: FishingRegulationsComponent},
  {path: 'closed-season', component: ClosedSeasonComponent},
  {path: 'license', component: LicenseComponent},
  {path: 'fishing-day', component: FishingDayComponent},
  {path: 'catch-statistics', component: CatchStatisticsComponent},
  {path: 'account', component: AccountComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
