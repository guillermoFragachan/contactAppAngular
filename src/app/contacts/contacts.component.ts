import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { Observable, of } from 'rxjs';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];
  selectedContact?: Contact;

  constructor(private contactService: ContactService) {}

  ngOnInit() {

    this.getContacts();
  }


  

  getContacts(): void {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  onSelect(hero: Contact): void {
    this.selectedContact = hero;
  }
}