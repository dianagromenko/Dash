import { Component, OnInit } from '@angular/core';
import { EmailService } from "../email.service";
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-iam',
  templateUrl: './iam.component.html',
  styleUrls: ['./iam.component.css']
})
export class IamComponent implements OnInit {
  private formData = {
    fullName: '',
    email: '',
    company: '',
    tel: '',
  };


  contactForm = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    company: [''],
    tel: ['', Validators.pattern('[\\+][ 0-9]+$')]
  });

  constructor(public _emailService: EmailService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.contactForm.status === "VALID") {
      this._emailService.sendEmail(this.contactForm.value)
        .subscribe((res) => {
          console.log(res);
        })
    }
  }
}
