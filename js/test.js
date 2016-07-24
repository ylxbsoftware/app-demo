;(function(window, undefined) {
    'use strict';
    const get = function(id) {
      return document.getElementById(id);
    }

    const log = function(result) {
      console.log(‘打印的结果为\n\t ${result}‘) && false; //字符串插值
    }

    let i = 2;
    let items = ['a', 'b', 'c'];
    let result = items.map((a) => a + 'c');

    let b = ['first'].concat(result); //添加到数组第一个
    b[b.length] = 'wanbao'; //添加到数组最后一个

    b.splice(b.length / 2, 0, 'middle'); //添加到数组中间

    get('content').innerHTML = b;

    const color = {
      '黑色': 'black',
      '红色': 'red'
    }

    let defaultColor = '',
    setColor = get('content').style.color;
    defaultColor in color ? setColor = color[defaultColor] : setColor = 'pink';
    log(JSON.stringify(color));

  })(this);
