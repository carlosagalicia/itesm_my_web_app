const userModel = require("../../models/user");

describe("User Model Test", () => {
  it("Should be able to return whether the user is adult", () => {
    const user = new userModel({ username: "John Doe", age: 18 });
    expect(user.isAdult()).toBeTruthy();
  });

  it("Should be able to return whether the user is not adult", () => {
    const user = new userModel({ username: "John Doe", age: 17 });
    expect(user.isAdult()).toBeFalsy();
  });

  it("Should create a user with valid properties in the instance", () => {
    const user = new userModel({ username: "ValidUser", age: 30 });
    expect(user.username).toBe("ValidUser");
    expect(user.age).toBe(30);
  });

  it("Shoud fail if there is an attempt to create a user without a 'username'", () => {
    const user = new userModel({ age: 20 });
    const error = user.validateSync();

    expect(error).toBeDefined();
    expect(error.errors.username).toBeDefined();
    expect(error.errors.username.kind).toBe("required");
  });

  test("Shoud fail if there is an attempt to create a user without a 'age'", () => {
    const user = new userModel({ username: "NoAgeUser" });
    const error = user.validateSync();

    expect(error).toBeDefined();
    expect(error.errors.age).toBeDefined();
    expect(error.errors.age.kind).toBe("required");
  });
});
