import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  _id:any
  courseData:any
  constructor(private service:GlobalService, private route:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((para)=>{
      this._id = para.get("_id")
      this.service.getRecord('courses',this._id).subscribe((res)=>{
        console.log(res)
        this.courseData = res
      })
  })
  }
  Update(data:any){
    const obj = {
      _id: this._id,
      course_Name: data.course_Name,
      course_Category: data.course_Category,
      course_Status: data.course_Status
    }
     this.service.updateRecord('courses',obj).subscribe(()=>{
      alert('Course Updated')
      this.router.navigate(['/dashboard'])
     })
  }

}
