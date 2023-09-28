const HomePage = require('../pageObjects/home.page')
const UserProfile = require('../pageObjects/userProfile.page')
const RoomChat = require('../pageObjects/roomChat.page')

describe('Instagram', () => {
  it('Search user', async () => {
    await HomePage.clickMenuSearch();
    await HomePage.typingSearch('arum.jpeg');
  }).timeout(480000)
  it('Follow user Instagram', async () => {
    await HomePage.clickUserFirst();
    await UserProfile.verifyName('Sekar Arum');
    await UserProfile.clickFollow();
  }).timeout(480000)
  it('Send messages to Instagram user', async () => {
    await UserProfile.clickBtnMessage();
    await RoomChat.verifyName('Sekar Arum');
    await RoomChat.typingMessages('Halo arum, ini adalah pesan yang dikirim automate');
    await RoomChat.clickBtnMessages();
  }).timeout(480000)
})