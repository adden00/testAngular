import {Component, OnInit} from '@angular/core';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  interpolation: ['{{', '}}']
})


export class CardComponent implements OnInit{
  title = 'My card title';
  number = 42;
  obj = {name: 'Artem', age: 26, job: 'student'};

  disabled = false;

  fromInput(event: any) {
  const value = event.target.value;
  this.title = value;
  }


  changeTitle() {
    this.title = 'title has been changed!';
  }


  ngOnInit() {
    setTimeout(() => {
      this.imUrl = 'https://pbs.twimg.com/media/EWQ3OCdX0AIbRwn.png';
      this.disabled = true;
    }, 3000);

  }

  getInfo(): string {
    return 'this is my info';
  }
  imUrl = 'https://sun9-23.userapi.com/c626122/u325866629/video/l_ccf2b1ce.jpg';

}
