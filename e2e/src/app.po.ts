import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  assertTitleText() {
    element(by.xpath('//span[contains(@class, "title")]')).getText().then(text => {
      expect(text).toBe('Hacker News');
    });
  }

  clickAppRoute(routeText: string) {
    element(by.xpath('//a[contains(text(), "' + routeText + '")]')).click();
  }

  clickFirstExternalStoryUrlFound() {
    element.all(by.xpath('//app-story-item//div[contains(@class, "url")]')).first().click();
  }

  assertActiveRouteText(activeRouteText: string) {
    element(by.xpath('//a[contains(@class, "mat-tab-label-active")]')).getText().then(text => {
      expect(text).toBe(activeRouteText);
    });
  }

  isDataLoaded() {
    element.all(by.xpath('//app-story-item')).count().then(count => {
      expect(count).toBeGreaterThan(0);

      const loadMoreButton = element(by.partialButtonText('Load more stories'));

      if (count === 30) {
        loadMoreButton.isPresent().then(result => {
          expect(result).toBe(true);
          this.clickLoadMoreButton(count);
        });
      } else {
        loadMoreButton.isPresent().then(result => {
          expect(result).toBe(false);
        });
      }

    });
  };

  clickLoadMoreButton(count: number) {
    element(by.partialButtonText('Load more stories')).click().then(() => {
      element.all(by.xpath('//app-story-item')).count().then(newCount => {
        expect(newCount).toBeGreaterThan(count);
      });
    });
  }
}
