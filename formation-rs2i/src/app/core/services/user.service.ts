import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../../shared/interfaces/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersCollection: AngularFirestoreCollection<User>;
  private msg$: BehaviorSubject<string> = new BehaviorSubject(null);
  public connect$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private user$: Observable<User[]>;
  public user: User;

  constructor(
    private afs: AngularFirestore,
    private router: Router
  ) {}


signInUser(user: User) {
  this.usersCollection = this.afs.collection<User>('user', ref => ref.where('login', '==', user.login).where('mdp', '==', user.mdp));
  this.user$ = this.usersCollection.valueChanges();
  this.user$.subscribe((data) => {
  if (data.length > 0) {
    console.log(data);
    this.user = data[0];
    this.connect$.next(true);
    this.router.navigate(['home']);
  } else {
    this.msg$.next('tu t\'es trompé tonton !');
  }
});
}


}
