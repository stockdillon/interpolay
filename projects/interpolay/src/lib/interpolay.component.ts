import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-interpolay',
  templateUrl: './interpolay.component.html',
  styles: [
  ]
})
export class InterpolayComponent implements OnInit {
  @Input() keywordOverlayMap = {'interpolay': ''};
  constructor() { }

  ngOnInit(): void {
  }

}
