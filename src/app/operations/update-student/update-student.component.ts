import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddStudentService } from 'src/app/add-student.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  stu: any;
  id: number;

  constructor(private route: ActivatedRoute,private service:AddStudentService,private router: Router) { }

  ngOnInit(): void {
    this.stu=new Student();
    this.id = this.route.snapshot.params['id'];
    this.service.getDetailById(this.id).subscribe(data => {
      console.log(data)
      this.stu = data;
    }, error => console.log(error));
    //getDetailById(id)
  }
  public submit()
  {
    let resp=this.service.doRegistration(this.stu);
     resp.subscribe();
    this.router.navigateByUrl('oper');
  }

}
