import { Component, OnInit } from '@angular/core';
import {Story} from '../../models/Story';
import {HackerNewsApiService} from '../../services/hacker-news-api.service';
import {ItemType} from '../../models/ItemType';
import {ActivatedRoute, Router} from '@angular/router';
import {CacheService} from '../../services/cache.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  stories = new Array<Story>();
  cachedStories: Array<Story>;
  storyIDs: Array<number>;
  startIndex = 0;
  endIndex = 30;
  sortByTime = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private hackerNewsApi: HackerNewsApiService,
    private cacheService: CacheService,
    private cookieService: CookieService
  ) {
  }

  ngOnInit() {
    this.cookieService.set('last-active-route', this.router.url);
    this.activatedRoute.data.subscribe((data: {
      itemType: ItemType,
      sortByTime: boolean
    }) => {
      this.hackerNewsApi.getStoryIDs(data.itemType).subscribe((IDs: Array<number>) => {
        this.cachedStories = this.cacheService.getCachedItemList();

        if (data.sortByTime === true) {
          this.sortByTime = data.sortByTime;
        }

        this.storyIDs = IDs;

        if (this.endIndex > IDs.length) {
          this.endIndex = IDs.length;
        }

        for (let i = this.startIndex; i < this.endIndex; i++) {
          const cachedIndex = this.cachedStories.findIndex((s: Story) => s.id === this.storyIDs[i]);
          if (cachedIndex !== -1) {
            this.stories.push(this.cachedStories[cachedIndex]);
          } else {
            this.hackerNewsApi.getItemById(this.storyIDs[i]).subscribe(item => {
              this.stories.push(item);
              this.cacheService.addStoryToCache(item);
            });
          }
        }
      });
    });
  }

  getStoryIndex(story: Story) {
    return this.stories.findIndex((s: Story) => s === story) + 1;
  }

  loadMoreStories() {
    this.startIndex = this.endIndex;
    this.endIndex = this.endIndex + 30;

    if (this.endIndex > this.storyIDs.length) {
      this.endIndex = this.storyIDs.length;
    }

    for (let i = this.startIndex; i < this.endIndex; i++) {
      const cachedIndex = this.cachedStories.findIndex((s: Story) => s.id === this.storyIDs[i]);
      if (cachedIndex !== -1) {
        this.stories.push(this.cachedStories[cachedIndex]);
      } else {
        this.hackerNewsApi.getItemById(this.storyIDs[i]).subscribe(item => {
          this.stories.push(item);
          this.cacheService.addStoryToCache(item);
        });
      }
    }
  }
}
