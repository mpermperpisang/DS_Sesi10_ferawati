const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {
    get iconCart () { return $('.shopping_cart_link'); }

    async validateHomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(this.iconCart).toBeDisplayed()
    }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();
