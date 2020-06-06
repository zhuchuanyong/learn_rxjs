
import { fromEvent } from 'rxjs';
import { scan,throttleTime,map } from 'rxjs/operators';

// 创建 订阅 执行 取消

/**
 * 
 * @param {String} classname css名称
 * @param {String} text 按钮名称
 */
function Cbutton (classname,text) {
    let CBtn = document.createElement('button')
    CBtn.innerHTML = text
    CBtn.classList.add(classname)
    document.body.appendChild(CBtn)
    return document.querySelector("."+classname);
}

//第一个示例
var button = Cbutton('button','点击示例');
fromEvent(button, 'click')
    .subscribe(() => console.log('Clicked!'));


// 纯净性 (Purity)
var buttonPurity = Cbutton('purity','纯净性');
fromEvent(buttonPurity, 'click').pipe(
    scan(count => count + 1, 0)
).subscribe(count => console.log(`Clicked ${count} times`));


// 流动性 (Flow)  1秒钟内最多点击一次
var Flowbutton = Cbutton('Flowbutton','Flow');
fromEvent(Flowbutton,'click').pipe(
    throttleTime(1000),
    scan(count => count + 1, 0)
).subscribe(count => console.log(`Clicked ${count} times`))


// 值 (Values)  累加每次点击的鼠标 x 坐标

var Valuesbutton = Cbutton('Valuesbutton','Values');
fromEvent(Valuesbutton,'click').pipe(
    throttleTime(1000),
    map(event => event.clientX),
    scan((count, clientX) => count + clientX, 0)
).subscribe(count => console.log(count))


