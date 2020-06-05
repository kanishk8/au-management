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
  id:any;
  institute:string;
  location:string;


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



 Search()
 {
   this.stu=this.stu.filter(res=>{
     return res.institute.toLowerCase().match(this.institute.toLowerCase());

   });
 }
 Find()
 {
  this.stu=this.stu.filter(res=>{
    return res.location.toLowerCase().match(this.location.toLowerCase());

  });
 }


  public findUserById(id)
  {
     let resp= this.service.getDetailById(this.id);// i used it here
   //  resp.subscribe((data)=>this.stu=data);
   resp.subscribe((data=>this.stu=[[{"id":33,"institute":"iit delhi","skill_set":"ml","contact_details":"8933549945","tentative_joining_date":"2020-08-01 00:00:00","location":"delhi","description":"se","feedback":"good "}]]))
     console.log(this.id);
     // this.stu=this.stu.filter(res=>{
       //  return res.id.match(this.id);
      
     
  }

}
