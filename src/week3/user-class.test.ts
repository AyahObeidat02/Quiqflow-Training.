// src/week3/user-class.test.ts

import { User, Admin } from "./user-class";

describe("User Class", () => {
  let user: User;

  beforeEach(() => {
    user = new User("noti", "noti@example.com");
  });

  test("login() should return login message", () => {
    expect(user.login()).toBe("noti logged in");
  });

  test("logout() should return logout message", () => {
    expect(user.logout()).toBe("noti logged out");
  });

  test("updateProfile() should update username", () => {
    user.updateProfile({ username: "newNoti" });
    expect(user.username).toBe("newNoti");
  });
});

describe("Admin Class", () => {
  let admin: Admin;
  let user: User;

  beforeEach(() => {
    admin = new Admin("adminNoti", "admin@example.com");
    user = new User("noti", "noti@example.com");
  });

  test("Admin role should be admin", () => {
    expect(admin.role).toBe("admin");
  });

  test("deleteUser() should return delete message", () => {
    expect(admin.deleteUser(user)).toBe("noti deleted by adminNoti");
  });
});
