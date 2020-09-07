import { Observable,of,from, interval ,pipe} from 'rxjs';
import {map } from 'rxjs/operators';
// observer // 观察者
// Subject(订阅者)
// Schedulers(操作符)


// const observable = new Observable((observer)=>{
//     observer.next('rx')
//     observer.next('js')
// })

// observable.subscribe((value)=>[
//     console.log(value)
// ])

// const observable =of('rxjs','js')
// observable.subscribe((value)=>[
//     console.log(value)
// ])

// var arr = ['周一', '周二', '周三', '周四', '周五'] 

// const observable=from(arr)
// observable.subscribe((value)=>{
//     console.log(value);
// })

const observable= interval(1000).pipe(
    map(x=>x+10)
)
const subscribe= observable.subscribe((value)=>{
    console.log(value);
})
setTimeout(()=>{
    subscribe.unsubscribe() 
},5000)