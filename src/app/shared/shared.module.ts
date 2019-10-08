import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material.module';
import { StoryItemComponent } from './components/story-item/story-item.component';
import {FlexModule} from '@angular/flex-layout';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { ItemListComponent } from './components/item-list/item-list.component';

@NgModule({
  declarations: [StoryItemComponent, DateAgoPipe, ItemListComponent],
  exports: [
    CustomMaterialModule,
    StoryItemComponent,
    DateAgoPipe
  ],
  imports: [
    CustomMaterialModule,
    CommonModule,
    FlexModule
  ]
})
export class SharedModule { }
