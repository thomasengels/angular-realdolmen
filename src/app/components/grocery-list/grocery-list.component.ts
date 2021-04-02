import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  groceryForm: FormGroup;

  ngOnInit(): void {
  }

  getGroceryFormOnIndex(index: number): FormGroup{
    return ((this.groceryForm.get('groceryList') as FormArray).at(index) as FormGroup);
  }

  constructor(private fb: FormBuilder) {
    this.groceryForm = this.fb.group({
      groceryList: this.fb.array([])
    });

    this.addNewGroceryItem();
  }

  createGroceryItemForm(): FormGroup {
    return this.fb.group({
       item: this.fb.control(null, Validators.required),
       amount: this.fb.control(null, Validators.required)
    });
  }

   get groceryListFormArray(): FormArray{
      return this.groceryForm.get('groceryList') as FormArray;
   }

  addNewGroceryItem() {
    this.groceryListFormArray.push(this.createGroceryItemForm());
  }
}
