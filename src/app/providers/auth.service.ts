import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Store } from '@ngxs/store';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { take } from 'rxjs/operators';

import { UserLogin, UserLogout } from '../ngnx/app.actions';
import { UserModel } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private store: Store,
  ) { }

  getAuthState(): Observable<firebase.default.User | null> {
    return this.afAuth.authState;
  }

  setUser(firebaseUser: firebase.default.User): Promise<UserModel> {
    const user: UserModel = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: `${firebaseUser.displayName}`,
      photoURL: `${firebaseUser.photoURL}`
    };

    return this.store.dispatch(new UserLogin(user))
      .pipe(take(1))
      .toPromise()
      .then(_ => user);
  }

  async googleSignin(): Promise<{ user: UserModel | null, error: string | null }> {
    try {
      const provider = new firebase.default.auth.GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);

      if (credential.user) {
        const user = await this.setUser(credential.user);

        return { user, error: '' };
      }
      return { user: null, error: 'Oops! Something went wrong. Please try again later.' };
    } catch (error) {
      console.log(error);
      // todo: Update error text for different scenarios
      return { user: null, error: 'Oops! Something went wrong. Please try again later.' };
    }
  }

  async logout(): Promise<void> {
    await this.afAuth.signOut();
    await this.store.dispatch(new UserLogout())
      .pipe(take(1))
      .toPromise();
  }
}
