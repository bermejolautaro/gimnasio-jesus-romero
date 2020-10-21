import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public imgSrc: string = '';
  @Input() public altTxt: string = '';
  @Input() public title: string = '';
  @Input() public text: string = '';

  public constructor() { }

  public ngOnInit(): void {
  }

}
