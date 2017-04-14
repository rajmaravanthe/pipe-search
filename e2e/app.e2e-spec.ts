import { CustompipePage } from './app.po';

describe('custompipe App', function() {
  let page: CustompipePage;

  beforeEach(() => {
    page = new CustompipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
