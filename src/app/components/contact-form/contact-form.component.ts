import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  formData: FormGroup;
  lat = 32.093652;
  lng = 34.824427;
  loadStart: boolean;
  loadComplete: boolean;
  @Output() messageSent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder, private contactService: ContactService, private el: ElementRef) { }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required]),
      // email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      phone: new FormControl('', [Validators.required]),
      content: new FormControl('')
    });
  }

  onSubmit(FormData) {
    this.loadStart = true;
    setTimeout(() => {
      this.loadComplete = true;
      this.messageSent.emit();
    }, 1000)
    // this.contactService.postMessage(FormData)
    //   .subscribe(response => {
    //     // location.href = 'https://mailthis.to/confirm';
    //     if (response) {
    //       this.showConfirm = true;
    //     }
    //   }, error => {
    //     console.warn(error.responseText)
    //     console.log({error})
    //   })
  }
}

