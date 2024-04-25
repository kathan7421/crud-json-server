import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form!: FormGroup;
  formdata: Fruit = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0
  };

  constructor(
    private fb: FormBuilder,
    private fruitService: FruitService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required]
    });

    this.route.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number): void {
    this.fruitService.getById(id).subscribe((data: Fruit) => {
      this.formdata = data;
      this.form.patchValue({
        name: data.name,
        price: data.price,
        quantity: data.quantity
      });
    });
  }

  update(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.form.valid) {
      this.fruitService.update(id, this.form.value).subscribe(() => {
        this.router.navigate(['fruit']);
      });
    } else {
      // Form is invalid, display error message or handle accordingly
    }
  }
}
