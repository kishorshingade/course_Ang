import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:GlobalService,private router:Router){}

  ngOnInit(): void {

  }
  signUp(data:any){
    const obj = {
      email: data.email,
      password: data.password
    }
    this.service.addRecord('users',obj).subscribe(()=>{
      alert('Account Created Sucessfully Click here to Log in')
      this.router.navigate([""])
    })
  }
}
