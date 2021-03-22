import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

}
