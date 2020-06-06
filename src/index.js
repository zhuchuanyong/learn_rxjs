if (process.env.NODE_ENV !== 'production') {
    require('./index.html')
}
import { fromEvent } from 'rxjs';

const button = document.querySelector('button');
fromEvent(button, 'click')
  .subscribe(() => console.log('Clicked!'));
console.log(1111)