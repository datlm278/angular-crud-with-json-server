import {Component, OnInit} from '@angular/core';
import {Fruits} from "../fruits";
import {FruitsService} from "../fruits.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newFruit: Fruits = {
    id: 0,
    name: '',
    description: '',
    quantity: 0,
    price: 0
  }

  constructor(private fruitService: FruitsService, private route: Router) {
  }

  ngOnInit(): void {
  }

  create() {
    this.fruitService.create(this.newFruit)
      .subscribe({
        next: (data) => {
          this.route.navigate(["/fruits/home"])
        },
        error: (error)=> {
          console.log(error)
        }
      })
  }

}
