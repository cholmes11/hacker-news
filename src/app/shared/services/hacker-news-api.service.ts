import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ItemType} from '../models/ItemType';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsApiService {

  constructor(
    private http: HttpClient
  ) { }

  getStoryIDs(type?: ItemType, startIndex: number = 0, endIndex: number = 29) {
    switch (type) {
      case ItemType.LATEST:
        return this.http.get('https://hacker-news.firebaseio.com/v0/newstories.json');
      case ItemType.ASK:
        return this.http.get('https://hacker-news.firebaseio.com/v0/askstories.json');
      case ItemType.SHOW:
        return this.http.get('https://hacker-news.firebaseio.com/v0/showstories.json');
      case ItemType.JOB:
        return this.http.get('https://hacker-news.firebaseio.com/v0/jobstories.json');
      case ItemType.TOP:
        return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
      default:
        return this.http.get('https://hacker-news.firebaseio.com/v0/newstories.json');
    }
  }

  getItemById(id: number) {
    return this.http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
  }
}
