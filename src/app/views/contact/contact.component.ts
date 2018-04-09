import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../classes/animations/routeranimations';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': ''} 
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
