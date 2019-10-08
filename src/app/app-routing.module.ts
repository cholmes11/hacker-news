import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemListComponent} from './shared/components/item-list/item-list.component';
import {ItemType} from './shared/models/ItemType';

const routes: Routes = [
  {
    path: 'top',
    component: ItemListComponent,
    data: {
      itemType: ItemType.TOP
    }
  }, {
    path: 'latest',
    component: ItemListComponent,
    data: {
      itemType: ItemType.LATEST,
      sortByTime: true
    }
  }, {
    path: 'ask',
    component: ItemListComponent,
    data: {
      itemType: ItemType.ASK
    }
  }, {
    path: 'show',
    component: ItemListComponent,
    data: {
      itemType: ItemType.SHOW
    }
  }, {
    path: 'jobs',
    component: ItemListComponent,
    data: {
      itemType: ItemType.JOB
    }
  }, {
    path: '',
    redirectTo: 'top',
    pathMatch: 'full'
  }, {
    path: '**',
    component: ItemListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
