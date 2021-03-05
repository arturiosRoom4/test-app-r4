import { UserModel } from '../models/user';

export class UserLogin {
  static readonly type = '[USER] Login';

  constructor(public payload: UserModel) {}
}

export class UserLogout {
  static readonly type = '[USER] Logout';

  constructor() {}
}
