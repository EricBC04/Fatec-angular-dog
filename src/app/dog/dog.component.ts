import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dog: Dog = {} as Dog;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
      this.loadDog();
  }

  loadDog() {
      this.dogService.getRandomDog().subscribe(
        {
          next : dog => this.dog = dog
        }
      );
  }








  getName(): string[] {
    return this.dog.message.split("/")[4].split("-");
  }


}








