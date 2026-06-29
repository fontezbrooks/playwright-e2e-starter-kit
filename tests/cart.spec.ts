import { test } from '../fixtures/test-options.js';
import { products } from '../utils/test-data.js';

test.describe('Shopping cart', () => {
  test('adding products updates the cart badge @smoke', async ({ loggedIn }) => {
    await loggedIn.addToCart(products.backpack);
    await loggedIn.expectCartCount(1);

    await loggedIn.addToCart(products.bikeLight);
    await loggedIn.expectCartCount(2);
  });

  test('cart page lists the items that were added', async ({ loggedIn, cartPage }) => {
    await loggedIn.addToCart(products.backpack);
    await loggedIn.openCart();

    await cartPage.expectItemCount(1);
    await cartPage.expectContains(products.backpack);
  });
});
