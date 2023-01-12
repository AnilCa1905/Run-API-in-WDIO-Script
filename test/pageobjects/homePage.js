const Common = require('./common');

class Homepage extends Common {
    /**
     * constructor
     */
    constructor() {
        super();
        this.$searchField = () => $(`input#twotabsearchtextbox`);
    }
/**
 * 
 * @param {*} value 
 */
    async searchItem(value)
    {
    await this.$searchField().setValue(value);
    }

}

module.exports = {  homePage : new Homepage() }