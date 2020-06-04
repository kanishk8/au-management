import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OperationsComponent} from './operations/operations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CreateStudentComponent} from './operations/create-student/create-student.component';
import { StudentDetailsComponent} from './operations/student-details/student-details.component';
import { UpdateStudentComponent } from './operations/update-student/update-student.component';
import { TrendsComponent } from './operations/trends/trends.component';



const routes: Routes = [

{path:'',component:DashboardComponent,pathMatch:'full'},
{path:'oper',component:OperationsComponent},
{path: 'add',component:CreateStudentComponent},
{path:'view',component:StudentDetailsComponent},
{path:'update/:id',component:UpdateStudentComponent},
{path:'trends',component:TrendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
