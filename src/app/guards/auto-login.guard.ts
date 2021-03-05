import { Select } from '@ngxs/store';
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivate,
    Router
} from '@angular/router';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { AuthService } from '../providers/auth.service';
import { AppState } from '../ngnx/app.state';
import { UserModel } from '../models/user';


@Injectable({
    providedIn: 'root'
})
export class AutoLoginGuard implements CanActivate {

    @Select(AppState.user)
    user!: Observable<UserModel>;

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log(':: AutoLoginGuard ::');
        return this.authService.getAuthState()
            .pipe(
                switchMap(user => {
                    if (user && user.uid) {
                        return this.authService.setUser(user);
                    }
                    return Promise.resolve(null);
                }),
                map(user => {
                    if (user) {
                        this.router.navigateByUrl('/home');
                        return false;
                    }
                    return true;
                })
            );
    }
}
