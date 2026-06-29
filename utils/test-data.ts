/**
 * Centralized test data. Keeping data out of specs makes tests readable
 * and lets you swap fixtures per environment without touching test logic.
 */

export const users = {
  standard: {
    username: process.env.TEST_USERNAME ?? 'standard_user',
    password: process.env.TEST_PASSWORD ?? 'secret_sauce',
  },
  lockedOut: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
  invalid: {
    username: 'no_such_user',
    password: 'wrong_password',
  },
} as const;

export const checkoutCustomer = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  postalCode: '94016',
} as const;

export const products = {
  backpack: 'Sauce Labs Backpack',
  bikeLight: 'Sauce Labs Bike Light',
} as const;
