const { delay } = require('../../helpers/delayHelper'); 
const waitUtils = require('../../helpers/waitUtils'); 

class HomePage { 
  get menuHome(){
    return $('//android.widget.FrameLayout[@content-desc="Home"]/android.view.ViewGroup')
  }

  get menuSearch(){ 
    return $('//android.widget.FrameLayout[@content-desc="Cara dan Jelajahi"]/android.widget.ImageView') 
  }

  get btnSearch(){
    return $('//*[@resource-id="com.instagram.android:id/search_tab"]')
  }

  get typeSearch(){
    return $('//*[@resource-id="com.instagram.android:id/action_bar_search_edit_text"]')
  }

  get resultUser(){
    return $('(//*[@resource-id="com.instagram.android:id/row_search_user_info_container"])[1]')
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

  async clickBtnSearch(){ 
    await waitUtils.waitUntilElementExist(this.btnSearch);
    await this.btnSearch.click(); 
    delay(3000);
  } 

  async typingSearch(keyword){
    await this.typeSearch.click();
    await this.typeSearch.clearValue();
    await this.typeSearch.setValue(keyword);
    delay(3000);
  }

  async clickUserFirst(){
    await this.resultUser.click()
  }
} 

module.exports = new HomePage()