import { Component, OnInit, Inject } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
import {Promotion} from '../shared/promotion';
import {PromotionService} from '../services/promotion.service';
import { flyInOut, expand } from '../animations/app.animation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {
  dish: Dish;
  dishErr: String;
  promotion: Promotion;
  promotionErr: String;
  leader: Leader;
  leaderErr: String;
  constructor(private dishService: DishService,
    private leaderService: LeaderService,
    private promotionService: PromotionService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader,
      errmess => this.leaderErr = <any>errmess);
    this.dishService.getFeaturedDish().subscribe(dishes => this.dish = dishes,
      errmess => this.dishErr = <any>errmess);
    this.promotionService.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion,
      errmess => this.promotionErr = <any>errmess);
  }

}
