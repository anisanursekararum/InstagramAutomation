class RoomChat {

  get typeMessages(){
    return $('(//*[@resource-id="com.instagram.android:id/row_thread_composer_edittext"])');
  }

  get btnSend(){
    return $('(//*[@resource-id="com.instagram.android:id/button_container" and @content-desc="Message"])')
  }

  async typingMessages(messages){
    await this.typeMessages.clearValue();
    await this.typeMessages.setValue(messages)
  }

  async clickBtnMessages(){
    await this.btnSend.click()
  }
}

module.exports = new RoomChat()