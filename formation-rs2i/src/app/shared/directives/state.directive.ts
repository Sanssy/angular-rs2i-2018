import { Directive, Input, OnChanges, HostBinding } from '@angular/core';
import { State } from '../enums/state.enum';
import { concat } from '../../../../node_modules/rxjs';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input() appState: State;
  @HostBinding('class') nomClass: String;
  constructor() {
   }

   ngOnChanges() {
    console.log(this.appState);
    this.nomClass = this.formatClass(this.appState);
   }

   private formatClass(state: State): String {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
   }
   // a livrer -> state-alivrer
   // en cours -> state-encours
   // livrée -> state-livree

}
