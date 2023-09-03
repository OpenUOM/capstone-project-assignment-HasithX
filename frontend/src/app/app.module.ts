import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TeacherTableComponent } from './component/teacher-table/teacher-table.component';
import { StudentTableComponent } from './component/student-table/student-table.component';
import { AddNewStudentComponent } from './component/add-new-student/add-new-student.component';
import { AddNewTeacherComponent } from './component/add-new-teacher/add-new-teacher.component';
import { EditStudentComponent } from './component/edit-student/edit-student.component';
import { EditTeacherComponent } from './component/edit-teacher/edit-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeacherTableComponent,
    StudentTableComponent,
    AddNewStudentComponent,
    AddNewTeacherComponent,
    EditStudentComponent,
    EditTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
