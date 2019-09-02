import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  cartTwo = '/cartTwo';
  status = false;
  constructor(private sharedService: SharedService, private router: Router) { }
  ngOnInit() { }

  toggle(url: string) {
    this.sharedService.currentStatus.subscribe(res => {
      this.status = res;
    });

    switch (url) {
      case 'cartOne':
        this.router.navigate(['/cartOne']);
        break;
      case 'cartTwo':
        if (this.status === true && url === 'cartTwo') {
          console.log('Navigating');
          this.router.navigate(['/cartTwo']);
        } else {
          console.log('No Navigation');
        }
        break;
      default:
        this.router.navigate(['']);
        break;
    }
  }
}
