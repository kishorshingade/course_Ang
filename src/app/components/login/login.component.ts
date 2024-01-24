import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user:any
  pass:any
  empData:any
 constructor(private service:GlobalService,private router:Router){}
 ngOnInit(): void {

 }
 Login(){
  this.service.getRecords('users').subscribe((res)=>{
    this.empData = res
    console.log(this.empData)
    const data = this.empData.filter((item:any)=>{
      return item.email == this.user && item.password == this.pass
    })
    if(data.length > 0){
      this.service.signIn(this.user)
      alert('Log in Sucessfully')
      this.router.navigate(['/dashboard'])
    }else{
      alert('Invalid Details')
      this.user = ''
      this.pass = ''
    }
   })
}
}
