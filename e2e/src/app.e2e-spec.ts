import { AppPage } from './app.po';
import {browser} from 'protractor';

describe('Angular 8 Hacker News App', () => {
  const appPage = new AppPage();

  const appRoutes = {
    top: 'Top',
    latest: 'Latest',
    ask: 'Ask',
    show: 'Show',
    jobs: 'Jobs'
  };

  beforeAll(() => {
    appPage.navigateTo();
    appPage.assertTitleText();
  });

  it('should check that router is working correctly', () => {
    appPage.assertActiveRouteText(appRoutes.top);
    appPage.clickAppRoute(appRoutes.latest);
    appPage.assertActiveRouteText(appRoutes.latest);
    appPage.clickAppRoute(appRoutes.ask);
    appPage.assertActiveRouteText(appRoutes.ask);
    appPage.clickAppRoute(appRoutes.show);
    appPage.assertActiveRouteText(appRoutes.show);
    appPage.clickAppRoute(appRoutes.jobs);
    appPage.assertActiveRouteText(appRoutes.jobs);
  });

  describe('should check that data is loaded correctly', () => {

    it('should check the top stories section', () => {
      appPage.clickAppRoute(appRoutes.top);
      appPage.isDataLoaded();
    });

    it('should check the latest stories section', () => {
      appPage.clickAppRoute(appRoutes.latest);
      appPage.isDataLoaded();
    });

    it('should check the ask stories section', () => {
      appPage.clickAppRoute(appRoutes.ask);
      appPage.isDataLoaded();
    });

    it('should check the show stories section', () => {
      appPage.clickAppRoute(appRoutes.show);
      appPage.isDataLoaded();
    });

    it('should check the job stories section', () => {
      appPage.clickAppRoute(appRoutes.jobs);
      appPage.isDataLoaded();
    });
  });

  it('should check last active route is saved by cookie service', () => {
    browser.waitForAngularEnabled(false);
    appPage.clickFirstExternalStoryUrlFound();
    browser.navigate().back();

    browser.sleep(5000); // Sleep for 5 seconds to handle navigating back
    appPage.assertActiveRouteText(appRoutes.jobs);
    appPage.isDataLoaded();

  });
});
