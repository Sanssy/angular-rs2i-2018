import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends AbstractComponent implements OnInit {
  constructor(
   collectionService:  CollectionService
  ) {
    super(collectionService);
    super.ngOnInit();
   }

  ngOnInit() {
    }

  // public add(item: Item): void {
  //   console.log(item);
  // }


}
