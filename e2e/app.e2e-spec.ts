import { SocialMediaGamePage } from './app.po';

describe('social-media-game App', () => {
  let page: SocialMediaGamePage;

  beforeEach(() => {
    page = new SocialMediaGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
