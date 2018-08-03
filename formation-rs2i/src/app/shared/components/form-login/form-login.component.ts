import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  public form: FormGroup;
  @Output() user: EventEmitter<User> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.creactionfrom();
  }

  creactionfrom() {
    this.form = this.fb.group({
      login: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      mdp: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

  signIn() {
    this.user.emit(this.form.value);
  }

  isError(fieldName: string): boolean {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
  }

}
