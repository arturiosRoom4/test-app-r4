import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../providers/alert.service';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

  constructor(
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  async googleSignin(): Promise<void> {
    const result = await this.authService.googleSignin();

    if (result.user && !result.error) {
      this.router.navigateByUrl('/home');
    } else {
      this.alertService.openAlert('Error', result.error || 'Oops! Something went wrong. Please try again later.');
    }
  }
}
