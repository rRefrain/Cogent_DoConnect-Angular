import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionUpdateComponent } from './question-update/question-update.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { AnswerCreateComponent } from './answer-create/answer-create.component';
import { AnswerUpdateComponent } from './answer-update/answer-update.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'questionList', component: QuestionListComponent},
  { path: 'questionCreate', component: QuestionCreateComponent},
  { path: 'answerUpdate/:id', component: AnswerUpdateComponent},
  { path: 'answerCreate/:id', component: AnswerCreateComponent},
  { path: 'question/:id', component: QuestionComponent},
  { path: 'answer/:id', component: AnswerComponent},
  { path: 'questionUpdate/:id', component: QuestionUpdateComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
