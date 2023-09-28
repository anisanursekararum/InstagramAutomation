class UserProfile {

  get profileName(){
    return $('//*[@resource-id="com.instagram.android:id/profile_header_full_name"]')
  }

  get btnMessages(){
    return $('(//*[@resource-id="com.instagram.android:id/button_container" and @content-desc="Message"])')
  }

  async verifyName(expectedName){
    const name = this.profileName.getText()
    expect(name).toHaveValue(expectedName)
  }

  async clickBtnMessage(){
    await this.btnMessages.click();
}

}

module.exports = new UserProfile()