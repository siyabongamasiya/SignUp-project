import DataAccessObject from "./DataAccessObject.js";

export default class UserAuth {
  constructor() {
    this.dao = new DataAccessObject();
  }

  signup(username, email, password, createdAt) {
    return this.dao.saveUser({
      "username": username,
      "email": email,
      "password": password,
      "createdAt": createdAt,
      "loggedin": true,
    });
  }


  login(username, password) {
    const user = this.dao.getUserByUsername(username);
    if (user) {
      if (password === user.password) {
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

  isloggedin(username) {}

  getUsers() {
    return this.dao.getUsers();
  }
}
