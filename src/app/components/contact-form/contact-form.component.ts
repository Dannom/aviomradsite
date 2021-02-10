import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  formData: FormGroup;


  constructor(private formBuilder: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required]),
      // email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      phone: new FormControl('', [Validators.required]),
      content: new FormControl('')
    });
  }

  onSubmit(FormData) {
    console.log(FormData)
    this.contactService.postMessage(FormData)
      .subscribe(response => {
        // location.href = 'https://mailthis.to/confirm';
        console.log(response);
      }, error => {
        console.warn(error.responseText)
        console.log({error})
      })
  }
}

