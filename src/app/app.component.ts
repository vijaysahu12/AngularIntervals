import { Component, OnInit } from '@angular/core';
import { SharedService } from './service/shared.service';
import { interval } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CyprusProject';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {

    interval(1000).subscribe(() => {
      this.sharedService.CheckMinutesAreDivisibleOfTwo();

    });
  }

}
