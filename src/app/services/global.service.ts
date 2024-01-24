import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseURL:any = "http://localhost:5004"
  constructor(private http:HttpClient) { }
   //getAll
   getRecords(path:any){
    let url = `${this.baseURL}/${path}`
    return this.http.get(url)
  }

  //get Single
  getRecord(path:any,_id:any){
    let url = `${this.baseURL}/${path}/${_id}`
    return this.http.get(url)
  }

  //Delete
 deleteRecord(path:any,_id:any){
 let url = `${this.baseURL}/${path}/${_id}`
 return this.http.delete(url)
 }
  //Add
 addRecord(path:any,empData:any){
  let url = `${this.baseURL}/${path}`
  return this.http.post(url,empData)
 }
 //update
 updateRecord(path:any,empData:any){
  let url = `${this.baseURL}/${path}/${empData.id}`
  return this.http.put(url,empData)
 }
 signIn(user:any){
  sessionStorage.setItem("userkey",user)
}
signOut(){
  sessionStorage.removeItem("userkey")
}
}
