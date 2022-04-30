import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') submitForm: NgForm;
  defaultSubscription = 'advanced';

  onSubmit() {
    //console.log(this.submitForm);
    console.log(this.submitForm.value);
  }
}
