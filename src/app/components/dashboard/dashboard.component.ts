import { Component ,OnInit} from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
   course:any
    constructor(private service:GlobalService){}
    ngOnInit(): void {
         this.getAllCourses()
    }
    getAllCourses(){
      this.service.getRecords('courses').subscribe((res)=>{
        console.log(res)
        this.course = res
      })
    }
    deleteCourse(_id:any){
    if(confirm('do You want to delete ?')){
      this.service.deleteRecord('courses',_id).subscribe(()=>{
        alert('Record Deleted Sucessfully')
        this.getAllCourses()
      })
    }
    }
}
