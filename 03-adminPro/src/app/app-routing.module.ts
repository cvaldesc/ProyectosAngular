import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoudComponent } from './nopagefoud/nopagefoud.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: '**', component: NopagefoudComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), PageRoutingModule, AuthRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
