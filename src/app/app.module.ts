import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Cart } from 'chart.js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { OperationsComponent } from './operations/operations.component';
import { CreateStudentComponent } from './operations/create-student/create-student.component';
import { StudentDetailsComponent } from './operations/student-details/student-details.component';
//import { StudentListComponent } from './operations/student-list/student-list.component';
import { UpdateStudentComponent } from './operations/update-student/update-student.component';
import { AddStudentService } from './add-student.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TrendsComponent } from './operations/trends/trends.component';
import { LocationComponent } from './operations/trends/location/location.component';
import { DummyComponent } from './dummy/dummy.component';
import { NavigateComponent } from './navigate/navigate.component';



/*const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("302817255877-3pc4domkft58sr6dikbmhkods82l93a7.apps.googleusercontent.com")
  }
]);


export function provideConfig() {
  return config;
}*/
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("302817255877-3pc4domkft58sr6dikbmhkods82l93a7.apps.googleusercontent.com")
  }
]);
export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OperationsComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    UpdateStudentComponent,
    TrendsComponent,
    LocationComponent,
    DummyComponent,
    NavigateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxChartsModule,
    SocialLoginModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
    
  //  Cart
  ],
  providers: [AddStudentService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
