import { NgModule } from '@angular/core';

import { AntDesignModule } from 'src/app/antDesign.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/mat.module';
import { HighlightModule } from 'ngx-highlightjs';
import { UsersRoutingModule } from './users-routing.module';
import { CreatUserComponent } from './create-user/create-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  imports: [
    CommonModule,
    AntDesignModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    MatModule,
    HighlightModule
  ],
  declarations: [
    ListUsersComponent,
    CreatUserComponent,
    EditUserComponent,
  ],
  exports: [
    ListUsersComponent,
    CreatUserComponent,
    EditUserComponent,
  ],
  providers: [
  ]
})
// tslint:disable-next-line: class-name
export class UsersModule { }
