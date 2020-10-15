import * as userSlice from "../features/user/userSlice";

test("User action types are correct", () => {
  expect(userSlice.login.fulfilled.type).toEqual("user/login/fulfilled");
  expect(userSlice.login.pending.type).toEqual("user/login/pending");
  expect(userSlice.login.rejected.type).toEqual("user/login/rejected");

  expect(userSlice.authenticate.fulfilled.type).toEqual(
    "user/authenticate/fulfilled"
  );
  expect(userSlice.authenticate.pending.type).toEqual(
    "user/authenticate/pending"
  );
  expect(userSlice.authenticate.rejected.type).toEqual(
    "user/authenticate/rejected"
  );

  expect(userSlice.editUser.fulfilled.type).toEqual("user/update/fulfilled");
  expect(userSlice.editUser.pending.type).toEqual("user/update/pending");
  expect(userSlice.editUser.rejected.type).toEqual("user/update/rejected");

  expect(userSlice.register.fulfilled.type).toEqual("user/register/fulfilled");
  expect(userSlice.register.pending.type).toEqual("user/register/pending");
  expect(userSlice.register.rejected.type).toEqual("user/register/rejected");

  expect(userSlice.editUser.fulfilled.type).toEqual("user/update/fulfilled");
  expect(userSlice.editUser.pending.type).toEqual("user/update/pending");
  expect(userSlice.editUser.rejected.type).toEqual("user/update/rejected");
});
