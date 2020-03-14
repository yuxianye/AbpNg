import { SolutionTemplatePage } from './app.po';

describe('Solution App', function() {
  let page: SolutionTemplatePage;

  beforeEach(() => {
    page = new SolutionTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
