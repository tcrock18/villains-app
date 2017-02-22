import { VillainsAppPage } from './app.po';

describe('villains-app App', () => {
  let page: VillainsAppPage;

  beforeEach(() => {
    page = new VillainsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
