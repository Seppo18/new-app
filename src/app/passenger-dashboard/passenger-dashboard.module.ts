import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

// components
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PasssangerDashboardService } from "./passenger-dashboard.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [PassengerDashboardComponent],
  providers: [PasssangerDashboardService]
})
export class PassengerDashboardModule {}
