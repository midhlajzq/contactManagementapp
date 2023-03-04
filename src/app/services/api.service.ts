import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  // all contacts - to get all contacts from api
  allContacts(){
// http requist to get all contacts
return this.http.get('http://localhost:3000/contacts')
  }
  // api to get a particular contact
  viewContact(contactId:string){
     return this.http.get('http://localhost:3000/contacts/'+contactId)
   }
  // api call for get a particular contact group
  viewContactGroupName(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId)
  }
  // api call to get all groups
  allGroups(){
    return this.http.get('http://localhost:3000/groups/')
  }
  // for call to add new contact details to url
  addContacts(contact:any){
    return this.http.post('http://localhost:3000/contacts/',contact)

  }
  // api call to delete a contact 
  deleteFunction(contactId:any){
    return this.http.delete('http://localhost:3000/contacts/'+contactId)
  }
  // api call to update existing contact
  updateContact(contactId:string,contactBody:any){
    return this.http.put('http://localhost:3000/contacts/'+contactId,contactBody)
  }
}

