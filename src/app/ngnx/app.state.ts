import { Action, Selector, State, StateContext } from '@ngxs/store';

import { UserLogin, UserLogout } from './app.actions';
import { UserModel } from '../models/user';

interface AppStateModel {
  user: UserModel;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    user: {
      uid: null,
      email: null
    }
  }
})
export class AppState {

  @Selector()
  static user(state: AppStateModel): UserModel {
    return state.user;
  }

  @Action(UserLogout)
  userLogout(ctx: StateContext<AppStateModel>, action: UserLogout): void {
    ctx.patchState({
      user: {
        uid: null,
        email: null
      }
    });
  }

  @Action(UserLogin)
  userLogin(ctx: StateContext<AppStateModel>, action: UserLogin): void {
    const user = action.payload;
    ctx.patchState({
      user
    });
  }
}
