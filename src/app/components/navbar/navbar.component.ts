import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
constructor(private service:GlobalService,private route:Router){}
ngOnInit(): void {

}
logOut(){
  if(confirm("Do you Want to Log Out ?")){
    this.service.signOut()
    this.route.navigate([""])
  }
}
}
