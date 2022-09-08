import { Component, OnInit } from '@angular/core';
import {Fruits} from "../fruits";
import {FruitsService} from "../fruits.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  updateFruit: Fruits = {
    id: 0,
    name: '',
    description: '',
    quantity: 0,
    price: 0
  }

  constructor(private fruitService: FruitsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getById(id);
    })
  }

  getById(id: number) {
    this.fruitService.getById(id)
      .subscribe((data) => {
        this.updateFruit = data
      })
  }

  update() {
    this.fruitService.update(this.updateFruit)
      .subscribe({
        next:(data) => {
          this.router.navigate(["/fruits/home"]);
        },
        error:(error) => {
          console.log(error);
        }
      })
  }
}
