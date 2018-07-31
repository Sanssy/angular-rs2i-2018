import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item';
import { AbstractComponent } from '../../../items/containers/abstract/abstract.component';
import { CollectionService } from '../../../core/services/collection.service';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.css']
})
export class DeliveredComponent extends AbstractComponent implements OnInit {
  public state = State;

  constructor(
    collectionService: CollectionService
  ) {
    super(collectionService);
    super.ngOnInit();
  }

  ngOnInit() {
  }

}
