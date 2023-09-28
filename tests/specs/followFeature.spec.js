const HomePage = require('../pageObjects/home.page')
const UserProfile = require('../pageObjects/userProfile.page')

describe('Follow and Unfollow User Instagram', () => {
  it('Follow user', async () => {
    await HomePage.clickMenuSearch();
    await HomePage.typingSearch('arum.jpeg');
    await HomePage.clickUserFirst();
    await UserProfile.verifyName('Sekar Arum');
    await UserProfile.clickFollow();
  })
})