import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title: string;
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.user = new User();

    this.activatedRoute.params.subscribe(param => {
      this.user._id = param.id;
    });

    this.displayUserInfo(this.user);
  }

  displayUserInfo(user: User): void {
    // this.user = JSON.parse(localStorage.getItem('user'));
    this.userService.getUser(user).subscribe(userContent => {
      this.user = userContent.user;
  });
 }

  onUsersUpdatedProfileInfo(): void {
    this.userService.editUserProfileInfo(this.user).subscribe(userContent => {
      if (userContent.success) {
        this.flashMessage.show(userContent.msg, {cssClass: 'alert-success', timeOut: 5000});
        this.router.navigate(['/home']);
       } else {
         this.flashMessage.show('Failed to edit profile', {cssClass: 'alert-danger', timeOut: 5000});
         this.router.navigate(['/profile/:id']);
       }
    });
  }
}
