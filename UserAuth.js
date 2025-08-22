import DataAccessObject from "./DataAccessObject.js";

export default class UserAuth {
  constructor() {
    this.dao = new DataAccessObject();
  }

  signup(username, email, password, createdAt) {
    return this.dao.saveUser({
      username: username,
      email: email,
      password: password,
      createdAt: createdAt,
      loggedin: true,
    });
  }

  getCurrentUser() {
    const users = this.getUsers();
    for (let user in users) {
      if (users[user]["loggedin"]) {
        return user;
      }
    }

    return null;
  }

  login(username, password) {
    const user = this.dao.getUserByUsername(username);
    if (user) {
      if (password === user.password) {
        this.dao.updateLoginStatus(username, true);
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  logout(username) {
    try {
      this.dao.updateLoginStatus(username, false);
      return true;
    } catch (e) {
      return false;
    }
  }

  getProfile(username) {
    return this.dao.getUserByUsername(username);
  }

  getUsers() {
    return this.dao.getUsers();
  }
}
