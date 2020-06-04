import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { AddStudentService } from 'src/app/add-student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  stu: Student=new Student();

  constructor(private service:AddStudentService,private router: Router) { }


  ngOnInit(): void {
  }
 public  registerNow()
  {
     let resp=this.service.doRegistration(this.stu);
     resp.subscribe();
     this.router.navigateByUrl('oper');

  }

}
