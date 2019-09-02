import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  divBgColor: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentStatus.subscribe(res => {
      console.log(res);
      this.divBgColor = res ? 'redColor' : 'noColor';
    });
  }

}
