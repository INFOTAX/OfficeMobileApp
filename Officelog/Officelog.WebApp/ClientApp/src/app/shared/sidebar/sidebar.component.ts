import { Component, OnInit } from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
         
      {
        label: 'Company', expanded : true,
        icon: 'pi pi-fw pi-pencil',
        items: [
            {label: 'List',  icon: 'fa fa-fw fa-book',routerLink:['/authenticated/company_log_list']},
            {label: 'Report', icon: 'fa fa-fw fa-area-chart',routerLink:  ['/authenticated/companydashboard_log']}
        ]
    },
    {
      label: 'Marketing', expanded : true,
      icon: 'pi pi-fw pi-pencil',
      items: [
          {label: 'List', icon: 'fa fa-fw fa-book',routerLink:  ['/authenticated/marketing_log_list']},
          {label: 'Report', icon: 'fa fa-fw fa-area-chart',routerLink:['/authenticated/marketing-dashBoard']}
      ]
  },
  {
    label: 'Conversion',
    icon: 'pi pi-fw pi-pencil', expanded : true,
    items: [
        {label: 'List', icon: 'fa fa-fw fa-book' ,routerLink: ['/authenticated/conversion_list']}
       
    ]
},


  ];


  }

}
