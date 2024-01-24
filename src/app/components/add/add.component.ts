import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  constructor(private service:GlobalService,private router:Router){}

  ngOnInit(): void {

  }
addCourse(data:any){
  const Obj = {
    course_Name: data.course_Name,
    course_Category: data.course_Category,
    course_Status: data.course_Status,
    created_at: new Date()
  }
  this.service.addRecord('courses',Obj).subscribe((res)=>{
    alert('Course Added Sucessfully')
    this.router.navigate(['/dashboard'])
  })
}
}
