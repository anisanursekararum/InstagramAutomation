const { delay } = require('../../helpers/delayHelper'); 
const waitUtils = require('../../helpers/waitUtils'); 

class HomePage { 
  get menuSearch(){ 
      return $('//android.widget.FrameLayout[@content-desc="Cara dan Jelajahi"]/android.widget.ImageView') 
  }

  get menuHome(){
    return $('//android.widget.FrameLayout[@content-desc="Home"]/android.view.ViewGroup')
  }

  async clickMenuHome(){
    await waitUtils.waitUntilElementExist(this.menuHome);
    await this.menuHome.click();  
    delay(3000);
  }

  async clickMenuSearch(){ 
    await waitUtils.waitUntilElementExist(this.menuSearch);
    await this.menuSearch.click(); 
    delay(3000);
  } 

} 

module.exports = new HomePage()