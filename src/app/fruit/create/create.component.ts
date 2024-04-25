import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FruitService } from '../fruit.service';
import { Router } from '@angular/router';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fruitService: FruitService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required]
    });
  }

  create() {
    if (this.form.valid) {
      const formData: Fruit = this.form.value;
      this.fruitService.create(formData).subscribe(
        (data) => {
          this.router.navigate(['fruit']); // Navigate to the fruit list page after successful creation
        },
        (error) => {
          // Handle error
        }
      );
    }
  }

  ngOnInit(): void {
  }
}
