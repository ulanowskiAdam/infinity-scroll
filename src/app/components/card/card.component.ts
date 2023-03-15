import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cats: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getRandomCats();
  }

  getRandomCats() {
    for (let i = 0; i < 10; i++) {
      this.apiService.getRandomCat().subscribe((response) => {
        this.cats.push(response[0]);
      });
    }
  }

  onScroll() {
    this.getRandomCats();
  }
}
