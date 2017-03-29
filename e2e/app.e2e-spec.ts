import { Angular4FirstAppPage } from './app.po';

describe('angular4-first-app App', function() {
  let page: Angular4FirstAppPage;

  beforeEach(() => {
    page = new Angular4FirstAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
