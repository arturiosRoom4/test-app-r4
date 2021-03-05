import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';

import { Observable } from 'rxjs';

import { AuthService } from '../providers/auth.service';
import { AppState } from '../ngnx/app.state';
import { UserModel } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  @Select(AppState.user)
  user!: Observable<UserModel>;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  async logout(): Promise<void> {
    await this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
