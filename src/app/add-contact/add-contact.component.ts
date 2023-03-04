import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  group:any =[]
  contact:MyContact={}
  
  constructor(private api:ApiService,private addContactRouter:Router){
this.contact.groupId = 'Choose a Group'
  }
  ngOnInit():void{
    this.api.allGroups()
    .subscribe((result:any)=>{
      console.log(result);
      this.group=result
      
    })
  }
  // addcontact
  addcontact(contact:any){
    this.api.addContacts(this.contact)
    .subscribe((data:any)=>{
      alert('New Contact Added successfully')
      // redirect to all contact page
this.addContactRouter.navigateByUrl('')
    })
  }


}
