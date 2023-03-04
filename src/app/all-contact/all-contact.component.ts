import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit {
    // to hold all contact from api

  allContacts:any = []
  loginDetails:any ;
  searchKey:string =''

constructor(private api:ApiService){

}
ngOnInit(): void {
  // to get all contact
 this.getAllContact()
}
getAllContact(){
   // api call to get all contacts
   this.api.allContacts()
    
   .subscribe((result:any)=>{
     // result is all conact array from api
     console.log(result);
     this.allContacts = result
     
   })
}
// delete contact
deleteContact(contactId:any){
  this.api.deleteFunction(contactId)
  .subscribe((data:any)=>{
   this.getAllContact()
  })
}
}
