import {Component, Input, OnInit} from '@angular/core';
import {Story} from '../../models/Story';
import {ItemType} from '../../models/ItemType';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss']
})
export class StoryItemComponent implements OnInit {

  @Input() index: number;
  @Input() story: Story;
  urlDomain: string;
  voted: boolean;
  commentsFetched: boolean;
  comments = new Array<Comment>();

  get ItemType() {
    return ItemType;
  }
  constructor() { }

  ngOnInit() {
    if (this.story != null) {
      this.getUrlDomain();
    }
  }

  getUrlDomain() {
    if (this.story.url != null) {
      const url = new URL(this.story.url);
      this.urlDomain = url.host;
    }
  }

  vote() {
    if (this.voted != true) {
      this.story.score = this.story.score + 1;
      this.voted = true;
    } else {
      this.story.score = this.story.score - 1;
      this.voted = false;
    }
  }

  navigateToUrl() {
    window.location.href = this.story.url;
  }
}
