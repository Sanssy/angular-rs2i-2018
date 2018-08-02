import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';
import { State } from '../../enums/state.enum';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  public form: FormGroup;
  public states = Object.values(State);
  @Output() nItem: EventEmitter<Item> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      reference: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      state: [State.ALIVRER],
      deliveryDate: [''], // possibilité de mettre un regex
    });
  }

  public process() {
    console.log(this.form.value);
    this.nItem.emit(this.form.value);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
    }

    isError(fieldName: string): boolean {
      return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
    }
}
