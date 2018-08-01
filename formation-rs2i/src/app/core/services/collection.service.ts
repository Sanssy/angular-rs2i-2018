import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
import { COLLECTION } from '../collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private _collection: Item[];

  constructor() {
    this.collection = COLLECTION;
  }

  /**
   * get collection
   */
  get collection(): Item[] {
    return this._collection;
  }

  /**
   * set collection
   */
  set collection(col: Item[]) {
    this._collection = col;
  }

   /**
   * add 1 item from collection
   */
  public add(item: Item): void {
    this.collection.push(item);
  }

  /**
   * get 1 item from collection
   */

  /**
   * update 1 item in collection
   */
  public update(arg0: Item): void {
    // update + catch pour les erreurs
  }

  /**
   * delete 1 item collection
   */

}
