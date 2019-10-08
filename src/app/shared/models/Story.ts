import {ItemType} from './ItemType';

export class Story {
  constructor(
    public by?: string,
    public descendants?: number,
    public id?: number,
    public kids?: Array<number>,
    public score?: number,
    public time?: number,
    public title?: string,
    public type?: ItemType,
    public url?: string
  ) {
  }
}
