import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  visibleSidebar: any = false;
  items!: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

  ngOnInit() {
    this.visibleSidebar=false;
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink:'/home'
      },
       {
        label: 'Acount',
        icon: 'pi pi-user',
        items: [{
          label: 'Employee',
          icon: 'pi pi-fw pi-plus',
          routerLink: '/employee'
        },
        {
          label: 'Customer',
          icon: 'pi pi-fw pi-prime',
          routerLink: '/customer'
        },
        ]
      },
      {
        label: 'Service',
        icon: 'pi pi-fw pi-prime',
      },
      {
        label: 'booking',
        icon: 'pi pi-fw pi-cart-plus',
      }
    ];
  }

}
