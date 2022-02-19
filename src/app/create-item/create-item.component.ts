import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fade } from '../animations';
import { Household } from '../models/household';
import { Item } from '../models/item';
import { HouseholdServiceService } from '../service/household-service.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css'],
  animations: [ fade ]
})
export class CreateItemComponent implements OnInit {
  households_id:any;
  item:any;

  newForm = new FormGroup({
    households_id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    quantity: new FormControl('')
  });

  prompt = "Add Item:";
  name:string = "";
  description:string = "";
  quantity: number = 0;

  constructor(private service: HouseholdServiceService, private redirect: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.households_id = params['hhid'];
    });
  }

  onSubmit(data:any) {
    this.service.createItem(new Item(-1, data.name, data.description, data.quantity, this.households_id, new Date().toDateString(), new Date().toDateString()), () => {
      this.redirect.navigate(['list/households']);
    });
  }

}
