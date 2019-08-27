import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gog-global-component',
  templateUrl: './gog-global-component.component.html',
  styleUrls: ['./gog-global-component.component.scss']
})
export class GogGlobalComponentComponent implements OnInit {

  gameProvider: string = "gog";

  constructor() { }

  ngOnInit() {
  }

}
