import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { State } from '../../../shared/enums/state.enum';

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.css']
})
export class DeliveredComponent implements OnInit {

  public collection: Item[];
  public state = State;

  constructor(private collectionsService: CollectionService) { }

  ngOnInit() {
    this.collection = this.collectionsService.collection;
  }

}
