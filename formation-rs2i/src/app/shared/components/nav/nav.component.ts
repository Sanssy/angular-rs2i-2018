import { Component, OnChanges } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { User } from '../../interfaces/user';
import { BehaviorSubject } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnChanges {

  public title = 'My super app';
  public isCollapsed = true;
  public connect$: BehaviorSubject<boolean>;
  public user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnChanges() {
    this.connect$ = this.userService.connect$;
    this.user = this.userService.user;
  }

  public logout(): void {
    this.userService.connect$.next(false);
    this.router.navigate(['login']);
  }


}
