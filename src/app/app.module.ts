import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHouseholdsComponent } from './list-households/list-households.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { DisplayHouseholdComponent } from './display-household/display-household.component';
import { CreateHouseholdComponent } from './create-household/create-household.component';
import { EditHouseholdComponent } from './edit-household/edit-household.component';
import { DeleteHouseholdComponent } from './delete-household/delete-household.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListHouseholdsComponent,
    ListItemsComponent,
    DisplayHouseholdComponent,
    CreateHouseholdComponent,
    EditHouseholdComponent,
    DeleteHouseholdComponent,
    DeleteItemComponent,
    CreateItemComponent,
    EditItemComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
