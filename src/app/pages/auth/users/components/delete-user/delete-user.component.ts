import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  userId: string = '';
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.userId = data.id;
    });

    if(this.userId) {
      this.userService.deleteUser(this.userId).subscribe(data => {
        this._snackBar.open("User Delete Successfully");
        console.log('Unable to Delete the User: " + err');
      }, err => {
        this._snackBar.open("Unable to Delete the User: " + err);
      });
    }

  }

}
