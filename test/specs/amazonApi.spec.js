const { homePage } = require('../pageobjects/homePage');

describe('Api calls for amazon.in', () => {
    it('user should be able to loag url', async () => {
        await homePage.openUrl();
        expect(await homePage.$homePagelogo().isDisplayed()).toBe(true);
    });
    it('user should be able to get api response while searching for an item', async () => {
        await browser.setupInterceptor();
        await homePage.searchItem("Iphone");
        await browser.pause(5000);
        //Get response from network request
        let searchSuggestions = await browser.getRequest('GET', 'https://completion.amazon.in/api/2017/suggestions');
        console.log('Search Suggestions Api :', searchSuggestions);
        console.log('search suggestions Headers :', searchSuggestions[5].headers);
        console.log('search suggestions body :', searchSuggestions[5].body);
        console.log('search suggestions response code:', searchSuggestions[5].response.statusCode);
        browser.expectRequest('GET', 'https://completion.amazon.in/api/2017/suggestions', 200);

    })
})