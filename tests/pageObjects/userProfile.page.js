class UserProfile {

  get profileName(){
    return $('//*[@resource-id="com.instagram.android:id/profile_header_full_name"]')
  }

  get btnMessages(){
    return $('(//*[@resource-id="com.instagram.android:id/button_container" and @content-desc="Message"])')
  }

  get btnFollow(){
    return $('//*[@resource-id="com.instagram.android:id/profile_header_follow_button"]')
  }

  async verifyName(expectedName){
    const name = this.profileName.getText()
    expect(name).toHaveValue(expectedName)
  }

  async clickBtnMessage(){
    await this.btnMessages.click();
  }

  async clickFollow(){
    await this.btnFollow.click();
  }

}

module.exports = new UserProfile()