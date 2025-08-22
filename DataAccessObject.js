export default class DataAccessObject {
  constructor() {
    this.USERS = "users";
  }

  //get all users
  getUsers() {
    return JSON.parse(localStorage.getItem(this.USERS));
  }

  // Save a new user
  saveUser(user) {
    try {
      const users = this.getUsers();
      users[user["username"]] = user;
      localStorage.setItem(`${this.USERS}`, JSON.stringify(users));
      return true;
    } catch (e) {
      return false;
    }
  }

  // Get user by username
  getUserByUsername(username) {
    const users = this.getUsers();
    return users[username] ? users[username] : null;
  }

  // Update user's loggedIn status
  updateLoginStatus(username, loggedIn) {
    try {
      const users = this.getUsers();
      users[username].loggedIn = loggedIn;
      users[username].loggedIn
        ? (currentUser = users[username])
        : (currentUser = null);
      localStorage.setItem(`${this.USERS}`, JSON.stringify(users));
      return true;
    } catch (e) {
      return false;
    }
  }

  // Delete user by username
  deleteUser(username) {
    try {
      const users = this.getUsers();
      delete users.username;

      localStorage.setItem(`${this.USERS}`, JSON.stringify(users));
      return true;
    } catch (e) {
      return false;
    }
  }
}
