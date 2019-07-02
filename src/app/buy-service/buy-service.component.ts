import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService} from '../_services/authentication.service';
import { UserService} from '../_services/user.service';
import { AlertService} from '../_services/alert.service';
import { User } from '@app/_models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buy-service',
  templateUrl: './buy-service.component.html',
  styleUrls: ['./buy-service.component.css']
})
export class BuyServiceComponent implements OnInit {
currentUser: User;
currentUserSubscription: Subscription;
users: User[] = []; 
registerForm: FormGroup;
loading = false;
submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private alertService: AlertService
  ) { 
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) { 
        //this.router.navigate(['/']);
      }
  }



  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          street: ['', Validators.required],
          zipcode: ['', Validators.required],
          cc: ['', Validators.required],
          number: ['', Validators.required],
          date: ['', Validators.required],
          cvc: ['', Validators.required]
          
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.userService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('successful', true);
                  this.router.navigate(['/home.component']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}

