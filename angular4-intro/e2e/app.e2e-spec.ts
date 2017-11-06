import { Angular4IntroPage } from './app.po';

describe('angular4-intro App', () => {
  let page: Angular4IntroPage;

  beforeEach(() => {
    page = new Angular4IntroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
