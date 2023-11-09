import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public heroName: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk', 'Capitan America', 'Wanda'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroName.pop();
  }

  resetHeroList(): void {
    this.heroName = ['Spiderman', 'Ironman', 'Thor', 'Hulk', 'Capitan America', 'Wanda'];
    this.deletedHero = undefined;
  }

}
