import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { AbstractComponent } from '../abstract/abstract.component';
import { State } from '../../../shared/enums/state.enum';

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.css']
})
export class DeliveredComponent extends AbstractComponent implements OnInit {
  public state: State;
  constructor(
    collectionService:  CollectionService
   ) {
     super(collectionService);
     super.ngOnInit();
    }

   ngOnInit() {
   }

}
