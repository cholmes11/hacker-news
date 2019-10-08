import { Injectable } from '@angular/core';
import {Story} from '../models/Story';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  cachedStories = new Array<Story>();

  constructor() { }

  addStoryToCache(story: Story) {
    this.cachedStories.push(story);
  }

  getCachedItemList() {
    return this.cachedStories;
  }
}
