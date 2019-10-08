import {ItemType} from './ItemType';

export class Comment {
  constructor(
    public by?: string,
    public id?: number,
    public kids?: Array<number>,
    public parent?: number,
    public time?: number,
    public type?: ItemType,
    public text?: string
  ) {
  }
}
