class RoomChat {

  get typeMessages(){
    return $('(//*[@resource-id="com.instagram.android:id/row_thread_composer_edittext"])');
  }

  get btnSend(){
    return $('(//*[@resource-id="com.instagram.android:id/row_thread_composer_button_send"])')
  }

  get Name(){
    return $('(//*[@resource-id="com.instagram.android:id/other_user_full_name_or_username"])');
  }

  async typingMessages(messages){
    await this.typeMessages.clearValue();
    await this.typeMessages.setValue(messages)
  }

  async clickBtnMessages(){
    await this.btnSend.click()
  }

  async verifyName(expectedName){
    const name = this.Name.getText()
    expect(name).toHaveValue(expectedName)
  }
}

module.exports = new RoomChat()