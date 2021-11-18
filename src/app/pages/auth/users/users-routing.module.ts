import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  { path: 'users',children: [
    { path: '', component: ListUserComponent},
    { path: 'create', component: AddUserComponent},
    { path: 'view/:id', component: ViewUserComponent},
    { path: 'delete/:id', component: DeleteUserComponent},
    { path: 'edit/:id', component: EditUserComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
