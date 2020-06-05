import { Component, OnInit } from '@angular/core';
import {Student}  from 'src/app/student'; 
import { AddStudentService } from 'src/app/add-student.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//import { Chart } from 'chart.js';
import {Chart} from 'node_modules/chart.js';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})

export class TrendsComponent implements OnInit {
stu: any;
values:any;
keys:any;

 
Piechart=[];

  constructor(private http:AddStudentService) { }

  ngOnInit(): void {}
  
loc()
{
  //this.ngOnInit();
  
  let resp= this.http.getDetails();
   resp.subscribe((data)=>this.stu=data);
   
   console.log(this.stu);
  
   let i=0 ;
   let loc_map = new Map();
   if(this.stu) {
   for(i=0;i<this.stu.length;i++) {

   let j =0
    j = loc_map.get(this.stu[i]["location"]);
   if(loc_map.get(this.stu[i]["location"])==null) {
    loc_map.set(this.stu[i]["location"], 1);
   }
   else {
    loc_map.set(this.stu[i]["location"], ++j);
   }
   }
   this.values = [];
   this.keys = [];

   for (const [key, value] of loc_map.entries()) {
  
this.values.push(value); 
  this.keys.push(key);
  }
  console.log(this.keys);
  }






  var myChart = new Chart("mychart", {
    type: 'bar',
    data: {
     
        labels: this.keys,
        datasets: [{
            //label: '# of Votes',
            data: this.values,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});







  






}
skill()
{
  let resp= this.http.getDetails();
   resp.subscribe((data)=>this.stu=data);
   
   console.log(this.stu);
  
   let i=0 ;
   let skill_map = new Map();
   if(this.stu) {
   for(i=0;i<this.stu.length;i++) {

   let j =0
    j = skill_map.get(this.stu[i]["skill_set"]);
   if(skill_map.get(this.stu[i]["skill_set"])==null) {
    skill_map.set(this.stu[i]["skill_set"], 1);
   }
   else {
    skill_map.set(this.stu[i]["skill_set"], ++j);
   }
 
   }
  }
  console.log(skill_map);
  this.values = [];
  this.keys = [];

  for (const [key, value] of skill_map.entries()) {
 
this.values.push(value); 
 this.keys.push(key);
 }
 console.log(this.keys);



  var myChart = new Chart("mychart", {
    type: 'bar',
    data: {
        labels: this.keys,
        datasets: [{
            //label: '# of Votes',
            data: this.values,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


}
ins()
{

  let resp= this.http.getDetails();
   resp.subscribe((data)=>this.stu=data);
   
   console.log(this.stu);
  
   let i=0 ;
   let inist_map = new Map();
   if(this.stu) {
   for(i=0;i<this.stu.length;i++) {

   let j =0
    j = inist_map.get(this.stu[i]["institute"]);
   if(inist_map.get(this.stu[i]["institute"])==null) {
    inist_map.set(this.stu[i]["institute"], 1);
   }
   else {
    inist_map.set(this.stu[i]["institute"], ++j);
   }
   
   }
  }
  console.log(inist_map);
  this.values = [];
  this.keys = [];

  for (const [key, value] of inist_map.entries()) {
 
this.values.push(value); 
 this.keys.push(key);
 }
 console.log(this.keys);



  var myChart = new Chart("mychart", {
    type: 'bar',
    data: {
      
        labels: this.keys,
        datasets: [{
            //label: '# of Votes',
            data: this.values,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}




}
