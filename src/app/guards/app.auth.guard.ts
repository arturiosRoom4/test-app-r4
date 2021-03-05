import { Select } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '../ngnx/app.state';
import { UserModel } from '../models/user';

@Injectable()
export class AuthGuard implements CanLoad {

    @Select(AppState.user)
    user!: Observable<UserModel>;

    constructor(
        private router: Router,
    ) { }

    canLoad(): Observable<boolean> {
        return this.user.pipe(
            map(usr => {
                if (usr && usr.uid) {
                    return true;
                }
                this.router.navigateByUrl('/auth');
                return false;
            })
        );
    }
}
