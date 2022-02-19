import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHouseholdComponent } from './create-household/create-household.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { DeleteHouseholdComponent } from './delete-household/delete-household.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { DisplayHouseholdComponent } from './display-household/display-household.component';
import { EditHouseholdComponent } from './edit-household/edit-household.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ListHouseholdsComponent } from './list-households/list-households.component';

const routes: Routes = [
  { path: 'create/household', component: CreateHouseholdComponent },
  { path: 'create/item/:hhid', component: CreateItemComponent },
  { path: 'list/households', component: ListHouseholdsComponent },
  { path: 'display/household/:id', component: DisplayHouseholdComponent },
  { path: 'edit/household/:id', component: EditHouseholdComponent },
  { path: 'edit/item/:id', component: EditItemComponent },
  { path: 'delete/household/:id', component: DeleteHouseholdComponent },
  { path: 'delete/item/:id', component: DeleteItemComponent }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
