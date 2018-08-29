import { HttpService } from './../../services/http.service';
import { Component, QueryList, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';

@Component({
  selector: 'page-thiccn',
  templateUrl: 'thiccn.html'
})
export class ThiccnPage implements AfterViewInit {

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  public cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';

  constructor(public navCtrl: NavController, public http: HttpService) {
    this.stackConfig = {
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
  }

  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });
    
    this.cards = [];
    this.addNewCards(1);
  }

  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    var color = '';
    var abs = Math.abs(x);
    let min = Math.trunc(Math.min(16*16 - abs, 16*16));
    let hexCode = this.decimalToHex(min, 2);
    console.log(`Value of x: ${x}`)
    if (x === 0) {
      color = '#FFF'
    }
    else if (x < 0) {
      color = '#FF' + hexCode + hexCode;
    } else {
      color = '#' + hexCode + 'FF' + hexCode;
    }
    
    element.style.background = color;
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }
   
  // Connected through HTML
  voteUp(like: boolean) {
    let removedCard = this.cards.pop();
    this.addNewCards(1);
    if (like) {
      this.recentCard = 'You liked: ' + removedCard.email;
    } else {
      this.recentCard = 'You disliked: ' + removedCard.email;
    }
  }
   
  // Add new cards to our array
  addNewCards(count: number) {
    console.log(this.cards)
    this.http.get('https://randomuser.me/api/?results=' + count)
    .subscribe(resp => {
      const result = resp.results
      console.log(resp)
      for (let val of result) {
        this.cards.push(val);
      }
    })
  }
   
  // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
  decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
    
    while (hex.length < padding) {
      hex = "0" + hex;
    }
    
    return hex;
  }









}





