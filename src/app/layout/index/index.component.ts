import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isPostsLoaded = false;
  isUserDataLoaded = false;
  user: User;

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {

    this.userService.getCurrentUser()
      .subscribe(data => {
        console.log(data);
        this.user = data;
        this.isUserDataLoaded = true;
      })
  }


}
