import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../classes/animations/routeranimations';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': ''} 
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
