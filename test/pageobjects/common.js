
module.exports = class Common {
    /**
     * constructor
     */
    constructor() {
        this.$homePagelogo = () => $(`#nav-logo-sprites`)
        


    }
   
    async openUrl () {
        await browser.url(`https://www.amazon.in/`);
        await browser.maximizeWindow();
        await this.$homePagelogo().waitForDisplayed(10000);
    }
}
