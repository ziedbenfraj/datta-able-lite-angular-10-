import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Executive Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: 'fas fa-tachometer-alt',
        classes: 'nav-item',
      },
      {
        id: 'forms-element',
        title: 'Engagement Dashboard',
        type: 'item',
        url: '/forms/basic',
        classes: 'nav-item',
        icon: 'fas fa-chart-line'
      },
      {
        id: 'tables',
        title: 'Competencies Dashboard',
        type: 'item',
        url: '/tables/bootstrap',
        classes: 'nav-item',
        icon: 'fas fa-share-alt-square'
      },
      {
        id: 'charts',
        title: 'Knowldge Base',
        type: 'item',
        url: '/charts/morris',
        classes: 'nav-item',
        icon: 'fas fa-street-view'
      },
      {
        id: 'sample-page',
        title: 'Ability Analysis',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'fas fa-chart-pie'
      }
    ]
  },
  
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
