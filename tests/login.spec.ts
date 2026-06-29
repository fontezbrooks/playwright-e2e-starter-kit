import { test } from '../fixtures/test-options.js';
import { users } from '../utils/test-data.js';

test.describe('Authentication', () => {
  test('standard user can log in @smoke', async ({ loginPage, inventoryPage }) => {
    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.expectLoaded();
  });

  test('invalid credentials are rejected', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.invalid.username, users.invalid.password);
    await loginPage.expectLoginError('Username and password do not match');
  });

  test('locked-out user sees a clear error', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);
    await loginPage.expectLoginError('Sorry, this user has been locked out');
  });
});
