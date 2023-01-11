import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styles: [
    `img {
      filter: brightness(0);
      /* width: 275px;
      height: 200px; */
    }`,
    `.cover { object-fit: cover; }`,
    `.show { filter: brightness(1); }`
  ]
})
export class PokemonViewComponent implements OnInit {

  @Input() url: string = '';
  @Input() show: boolean = true;
  @Input() width: number = 0;
  @Input() height: number = 0;
  @Input() adjust: boolean = false;

  // @ts-ignore
  @ViewChild('canviarFons') canviarFons: ElementRef;

  canviarBorde(){
    this.render.addClass(this.canviarFons.nativeElement,'canviBorde')

  }

  constructor(private render: Renderer2) {}

  ngOnInit(): void {
  }

}
