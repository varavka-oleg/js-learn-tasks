"use strict";
let otvety = [
  [],
/* 1-я тема*/['10', '1', '2', '6', '9px', '$45', '2', 'NaN', 'Infinity', '-95', '-14', '1', 'NaN', '-2'],
/* 2-я тема*/['Hello 1', 'Hello name', 'Hello Gora'],
/* 3-я тема*/['2', '2', '2', '1'],
/* 4-я тема*/['4', '5'],
/* 5-я тема*/['true', 'false', 'true', 'true', 'false', 'false', 'false'],
/* 6-я тема*/['да', "result = (a+b<4)?'Мало':'Много';", "message=(login == 'Сотрудник')?'Привет':(login == 'Директор')?'Здравствуйте': (login == '') ? 'Нет логина' : ''; "],
/* 7-я тема*/['2', '1,2', 'null', '1, undefined', '3', '(age==14 || age>14) && (age<90 || age==90)', '!(age>14 && age<90)', 'age<14 || age>90', '-1', '0', '1'],
/* 8-я тема*/['1', '1,2,3,4', '1,2,3,4,5', '0,1,2,3,4', '0,1,2,3,4', 'for(let i=2; i < 11; i+=2) alert(i);', 'let i=0; while (i<3) alert( `number ${i++}!` );'],
/* 9-я тема*/["function checkAge(age) { return age > 18?true:confirm('Родители разрешили?'); }", "function checkAge(age) { return age > 18 || confirm('Родители разрешили?'); }"]
];
function ShowResult(iglava, procent) {/* Скрыть кнопку запуска теста
                                        Отобразить блок с результатом
                                        Занести результат выполнения  */
  document.getElementById("b" + iglava).style = "display: none";
  document.getElementById('d' + iglava).style = "display: inline-block";
  document.getElementById("r" + iglava).innerHTML = procent + "%";
  document.getElementById("s" + iglava).innerHTML = " - " + procent + "%";
}
function Proverka(iglava, nVoprosov) {//Провеpка ответов
  //iglava-порядковый номер главы
  //nVoprosov-количество вопросов в блоке
  iglava = +iglava;
  nVoprosov = +nVoprosov;
  let otvet = "";
  let pr_otvet = "";
  let pr_otvet_ish = "";
  let score = 0;
  for (let i = 1; i <= nVoprosov; i++) {
    otvet = document.getElementById("i" + iglava + "_" + i).value;//ответ пользователя
    otvet = otvet.replace(/\s+/g, '').trim();//убрать пробелы
    pr_otvet_ish = pr_otvet = otvety[iglava][i - 1];
    pr_otvet = pr_otvet.replace(/\s+/g, '').trim();//убрать пробелы
    //сравниваем ответ с правильным
    if (otvet == pr_otvet) {
      score++;
    } else {
      document.getElementById("i" + iglava + "_" + i).value = pr_otvet_ish;
      document.getElementById("i" + iglava + "_" + i).classList.add("red");
    }
  }
  document.getElementById("no" + iglava).innerHTML = score;
  document.getElementById("nv" + iglava).innerHTML = nVoprosov;
  document.getElementById("fb" + iglava).setAttribute('disabled', true);
  let result = Math.round(100 * score / nVoprosov);
  ShowResult(iglava, result);
  //alert("Правильных ответов " + score + " из " + nVoprosov);
  if (score == nVoprosov) {
    location.href = '#d' + iglava;
  }
}
//функция для самопроверки
function fpro() {
  alert(null || -1 && 1);
}
//console.log('alert(null || 2 && 3 || 4);');
