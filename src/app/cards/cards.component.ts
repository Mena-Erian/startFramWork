import { Component } from '@angular/core';
// import { log } from 'console';

interface imgSrcObj {
  imgSrc: string;
}

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  displayNone: boolean = false;
  indexItem: number = 0;
  items: imgSrcObj[] = [
    { imgSrc: '/images/port1.png' },
    { imgSrc: '/images/port2.png' },
    { imgSrc: '/images/port3.png' },
    { imgSrc: '/images/port1.png' },
    { imgSrc: '/images/port2.png' },
    { imgSrc: '/images/port3.png' },
  ];
  itemSrc: imgSrcObj = { imgSrc: '/images/port1.png' };
  showltcont(item: imgSrcObj, index: number): void {
    // let itemclicked: imgSrcObj = item;
    this.itemSrc = item;
    this.indexItem = index;
  }

  slideRight = () => {
    if (this.indexItem < this.items.length - 1) {
      this.itemSrc = this.items[++this.indexItem];
    }
    console.log('slide right index = ', this.indexItem);
  };
  slideLeft = () => {
    if (this.indexItem > 0) {
      this.itemSrc = this.items[--this.indexItem];
    }
    console.log('slide left index = ', this.indexItem);
  };
}
// sliderImg(slideGo: number | void) {

//   let slideRight = (indexnow: number)=> {
//     console.log('inner right');
//     return this.itemSrc=this.items[indexnow+1]
//   }
//   let slideLeft=(indexnow: number) =>{}
//   if (slideGo === 1) {
//     console.log('right');

//   return  slideRight(this.indexItem);
//   } else if (slideGo === 0) {
//     console.log('left');
//    return slideLeft(this.indexItem);
//   } else {
//     return this.itemSrc;
//   }
// }
