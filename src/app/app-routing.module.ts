import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonStyleAnimationComponent } from './components/button-style-animation/button-style-animation.component';

const routes: Routes = [
  { path: 'button-animation', component: ButtonStyleAnimationComponent },
  { path: '', component: ButtonStyleAnimationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
