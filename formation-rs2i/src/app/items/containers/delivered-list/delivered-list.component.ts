import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { State } from '../../../shared/enums/state.enum';

@Component({
  selector: 'app-delivered-list',
  templateUrl: './delivered-list.component.html',
  styleUrls: ['./delivered-list.component.css']
})
export class DeliveredListComponent implements OnInit {

  public delivered: Item[];
  public state = State;

  constructor(private collectionsService: CollectionService) { }

  ngOnInit() {
    this.delivered = this.collectionsService.collection;
  }

}
