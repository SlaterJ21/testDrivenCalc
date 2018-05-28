
let calculator = {
    add: function(x,y){return x + y},
    subtract: function(x,y){return x - y},
    multiply: function(x,y){return x*y},
    divide: function(x,y){return x/y},
    num1: function(string, operator){return parseInt (string.slice(0, string.indexOf(operator)))},
    num2: function(string, operator){return parseInt (string.slice(string.indexOf(operator) + 1, string.length))},
    error: function(count){if (count > 1){return 'Error'}},
}

let count = 0;
let equation = '';
let equated = 0;


function clear(){
  $('#screen').text('');
  count = 0;
  equation = '';
  equated = 0;
}

    $('#clear').click(clear)

function makeEquation(){
  let text = $(event.target).html();

  if(text === 'C' || text === 1){
    return;
  }
  if(text === '+' || text === '-' ||text === '÷' || text === 'x' || equated === 1){
      count++;
      if(calculator.error(count) == 'Error'){
        $('#screen').text('Error')
        return;
      }
  }
  $('#screen').append(text);
}

    $('span').click(makeEquation)

function equate(){
  let equation = $('#screen').text()
  if (equated === 1 || equation == 'Error'){
    return;
  }
  if (equation.includes('+')){
    $('#screen').append(calculator.add(calculator.num1(equation, '+'),calculator.num2(equation, '+')))
  }
  if (equation.includes('-')){
    $('#screen').append(calculator.subtract(calculator.num1(equation, '-'),calculator.num2(equation, '-')))
  }
  if (equation.includes('÷')){
    $('#screen').append(calculator.divide(calculator.num1(equation, '÷'),calculator.num2(equation, '÷')))
  }
  if (equation.includes('x')){
    $('#screen').append(calculator.multiply(calculator.num1(equation, 'x'),calculator.num2(equation, 'x')))
  }
  equated++;
  count++;
  count++;
}

    $('#equals').click(equate)

$('#screen').text('')
