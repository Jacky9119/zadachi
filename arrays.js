/*Как получить последний элемент из произвольного массива?

У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.

Напишите код для получения последнего элемента goods.*/

var goods = ["яблоки", "груши", "апельсины"];

goods.length = 2;
alert( goods.pop() );
alert( goods );

/*Как добавить элемент в конец произвольного массива?

У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».*/
//очень ебанутое задание и скорее всего я не правильно его сделал. 

var goods = goods.push("Комьютер");

/*Задача из 5 шагов-строк:

Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»
Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
Удалите первое значение массива и выведите его alert.
Добавьте в начало значения «Рэп» и «Регги».*/

var styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles [styles.length - 2] = "Классика";           //Вот это подсмотрел когда всё сделал.

alert( styles.shift() );

styles.unshift("Рэп", "Рэгги");                    //..и это. В начале я делал с alert.




/* Напишите код для вывода alert случайного значения из массива:

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
P.S. Код для генерации случайного целого от min to max включительно:

var rand = min + Math.floor(Math.random() * (max + 1 - min));*/

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var rand = min + Math.floor(Math.random() * (arr.length));           

alert(rand);                                                //в решении вообще по другому alert( arr                                                               [rand] ); И я чет не понял почему. 


/*Напишите код, который:

Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива*/

var numbers = [];

while (true) {
 
var value = prompt('Введите число', 0);                 //От это для меня было оче сложно, поэтому я                                                         просто переписал от руки вдумываясь и вроде                                                                             понял.
if (value === "" || value === null || isNaN(value))

numbers.push(+value);
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
sum += numbers[i];
}
alert( sum );



/*Что выведет этот код?

var arr = [1, 2, 3];

var arr2 = arr;                                                   Выведет 5.
arr2[0] = 5;

alert( arr[0] );
alert( arr2[0] );
*/




//--------------------------------



/*Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.

Например:

arr = ["test", 2, 1.5, false];

find(arr, "test"); // 0
find(arr, 2); // 1
find(arr, 1.5); // 2

find(arr, 0); // -1 */

function find(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array [i] == value) return i;                  //Тут тоже странно, условие                                                           непонятное мне было в итоге глянул в решение и                                                  все равно не понял в чем прикол и как делать.                                                    Что тут имеется ввиду под array [i]?
                                                      
    }

    return -1;
}

/*Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.

Пример работы:

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
// теперь filtered = [5, 4, 3]
// arr не изменился*/

var results = [];
for (var i = 0; arr > 0; i++);
                                                /*Посмотрев в решение понял что даже думал не так как там написано.*/

 //-----------------------------------------------------------
 
 
