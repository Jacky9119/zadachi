
 /*Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.*/

 function isEmpty(obj) {
  for ( var key in obj) {
    return false;
  }
    return true;
}

var schedule = {};

alert( isEmpty(schedule) ); 

schedule["8:30"] = "подъём";

alert( isEmpty(schedule));

/*
Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.

Если объект пустой, то результат должен быть 0.*/

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};     
  var sum = 0;                                
for ( var name in solaries) {
  sum += solaries [name];
}
alert(sum);


/*Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

Если объект пустой, то пусть он выводит «нет сотрудников».*/

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
}; 
var max = 0;                                       /*Это тупо переписал так как жопа полная
                                                   Не понял зачем тут maxName = '';*/
var maxName = "";
for (var name in salaries) {
  if (max < salaries [name]) {
    max = salaries [name];
    maxName = name;
  }
}
alert( maxName || "нет сотрудников");                       

