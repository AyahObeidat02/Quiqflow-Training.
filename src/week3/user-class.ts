// src/week3/user-class.ts

export class User {
  username: string;
  email: string;

  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
  }

  login() {
    return `${this.username} logged in`;
  }

  logout() {
    return `${this.username} logged out`;
  }

  updateProfile(updates: Partial<{username: string; email: string}>) {
    Object.assign(this, updates);
    return this;
  }
}

// Admin subclass
export class Admin extends User {
  role: string;

  constructor(username: string, email: string) {
    super(username, email);
    this.role = "admin";
  }

  deleteUser(user: User) {
    return `${user.username} deleted by ${this.username}`;
  }
}
