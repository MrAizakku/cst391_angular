import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../models/item';
import { HouseholdServiceService } from '../service/household-service.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  prompt = "Edit Item:";
  name:string = "";
  description:string = "";
  quantity: number = 0;

  newForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    quantity: new FormControl('')
  });

  item:any;

  constructor(private service: HouseholdServiceService, private redirect: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.item = this.service.getItem(params['id'], (item: Item) => { 
        this.item = item;
      })
    });
  }

  onSubmit(data:any): void {
    console.log(data);
    
    this.service.updateItem(new Item(data.id, 
      data.name, 
      data.description, 
      data.quantity, 
      data.households_id, 
      data.created_at, 
      new Date().toDateString()),
      () => {
        this.redirect.navigate(['list/households']);
      });
  }

}
