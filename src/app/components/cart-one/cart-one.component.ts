import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { LastCharUperCasePipe } from 'src/app/pipes/last-char-uper-case.pipe';
@Component({
  selector: 'app-cart-one',
  templateUrl: './cart-one.component.html',
  styleUrls: ['./cart-one.component.css'],
})
export class CartOneComponent implements OnInit {

  divBgColor = '';
  pageContent = 'You are on cart-One page';
  constructor(private sharedService: SharedService) { }

  ngOnInit() {

    this.sharedService.currentStatus.subscribe(res => {
      this.divBgColor = res ? 'redColor' : 'noColor';
    });
  }
}
