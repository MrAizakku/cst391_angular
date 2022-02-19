import { Component, Input, OnInit } from '@angular/core';
import { fade } from '../animations';
import { Item } from '../models/item';

@Component({
  selector: 'app-display-household',
  templateUrl: './display-household.component.html',
  styleUrls: ['./display-household.component.css'],
  animations: [ fade ]
})
export class DisplayHouseholdComponent implements OnInit {
  @Input() household:any;
  selectedItem:any;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedUItem(item: Item) {
    this.selectedItem = item;
  }

}
