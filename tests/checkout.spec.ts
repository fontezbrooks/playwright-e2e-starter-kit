import { test } from '../fixtures/test-options.js';
import { products, checkoutCustomer } from '../utils/test-data.js';

test.describe('Checkout', () => {
  test('a user can complete an order end-to-end @smoke', async ({
    loggedIn,
    cartPage,
    checkoutPage,
  }) => {
    // Arrange: add an item and open the cart.
    await loggedIn.addToCart(products.backpack);
    await loggedIn.openCart();
    await cartPage.expectItemCount(1);

    // Act: proceed through checkout.
    await cartPage.checkout();
    await checkoutPage.fillCustomerInfo(
      checkoutCustomer.firstName,
      checkoutCustomer.lastName,
      checkoutCustomer.postalCode,
    );
    await checkoutPage.finish();

    // Assert: order confirmation is shown.
    await checkoutPage.expectOrderComplete();
  });
});
