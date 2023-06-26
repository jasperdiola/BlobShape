import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-box-animation',
  templateUrl: './box-animation.component.html',
  styleUrls: ['./box-animation.component.scss']
})
export class BoxAnimationComponent implements OnInit, AfterViewInit {

  @ViewChild('blobShape') blobShape!:ElementRef;

  constructor(private renderer: Renderer2){}

  ngAfterViewInit() {
    
  }

  ngOnInit(){

  }

  boolVal:boolean = true;
  onClick(){
    const element = this.blobShape.nativeElement;

    if (this.boolVal) {
      this.renderer.setStyle(element, 'border-bottom', '20px solid white')
      this.boolVal = !this.boolVal;
    } else {
      this.renderer.setStyle(element, 'border-bottom', '0px solid white')
      this.boolVal = !this.boolVal;
    }
  }

  

}
