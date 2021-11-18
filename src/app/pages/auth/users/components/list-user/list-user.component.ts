import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';

const ELEMENT_DATA: User[] = [];

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'actions'];
  dataSource = ELEMENT_DATA;

  listUsers: User[] = [];
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.listUsers()
      .subscribe(data => {
        this.listUsers = data
      });
  }

}
