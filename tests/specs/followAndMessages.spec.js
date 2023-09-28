const HomePage = require('../pageObjects/home.page')
const UserProfile = require('../pageObjects/userProfile.page')
const RoomChat = require('../pageObjects/roomChat.page')

describe('Instagram', () => {
  it('Follow user Instagram', async () => {
    await HomePage.clickMenuSearch();
    await HomePage.typingSearch('arum.jpeg');
    await HomePage.clickUserFirst();
    await UserProfile.verifyName('Sekar Arum');
    await UserProfile.clickFollow();
  })
  it('Send messages to Instagram user', async () => {
    await HomePage.clickMenuSearch();
    await HomePage.typingSearch('arum.jpeg');
    await HomePage.clickUserFirst();
    await UserProfile.verifyName('Sekar Arum');
    await UserProfile.clickBtnMessage();
    await RoomChat.verifyName('Sekar Arum');
    await RoomChat.typingMessages('Test untuk mengirim pesan');
    await RoomChat.clickBtnMessages();
  }).timeout(120000)
})