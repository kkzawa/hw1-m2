let userName = prompt('Введите ваше имя!');
console.log(userName);
const isEqual1 = 0 == 0;
 console.log(isEqual1);
 const isEqual2 = 13 === 0;
 console.log(isEqual2);
 const isEqual3 = 0 === 13;
 console.log(isEqual3);
 const colorList = [
    {name: 'yellow  приготовиться', interval: 500},
    {name: 'red  стоять', interval: 4000},
    {name: 'yellow  приготовиться', interval: 500},
    {name: 'green  идти', interval: 4000}
  ];
  
  let count = 0;
  
  function changeColor() {
    if (count === colorList.length) {
      count = 0;
    }
    console.log(colorList[count].name)
    setTimeout(changeColor, colorList[count].interval)
    count = count + 1;
  }
  
  changeColor()