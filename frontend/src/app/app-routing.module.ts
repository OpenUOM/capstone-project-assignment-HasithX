import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewStudentComponent } from './component/add-new-student/add-new-student.component';
import { AddNewTeacherComponent } from './component/add-new-teacher/add-new-teacher.component';
import { EditStudentComponent } from './component/edit-student/edit-student.component';
import { EditTeacherComponent } from './component/edit-teacher/edit-teacher.component';
import { StudentTableComponent } from './component/student-table/student-table.component';
import { TeacherTableComponent } from './component/teacher-table/teacher-table.component';


const routes: Routes = [
  { path: '', component: TeacherTableComponent },
  { path: 'student', component: StudentTableComponent },
  { path: 'addTeacher', component: AddNewTeacherComponent },
  { path: 'addStudent', component: AddNewStudentComponent },
  { path: 'editStudent', component: EditStudentComponent },
  { path: 'editTeacher', component: EditTeacherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
