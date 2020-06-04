import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { AddStudentService } from 'src/app/add-student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  stu:any;
  id: number;

  constructor(private service:AddStudentService,private router: Router) { }

  ngOnInit(): void {
   let resp= this.service.getDetails();
   resp.subscribe((data)=>this.stu=data);
  }
  public  view()
  {
     this.router.navigateByUrl('oper');
     

  }
  public delteUser(id:number)
  {
     let resp= this.service.deleteDetails(id);
     resp.subscribe((data)=>console.log(data));
     this.router.navigateByUrl('oper');
  }
 public UpdateUser(id: number)
 {
  this.router.navigate(['update', id]);
 }






  public findUserById(id)
  {
     let resp= this.service.getDetailById(this.id);// i used it here
     resp.subscribe((data)=>this.stu=data);
     console.log(this.id);
     // this.stu=this.stu.filter(res=>{
       //  return res.id.match(this.id);
      
     
  }

}
