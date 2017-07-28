var minutos = 135;

var horasTemp = minutos / 60;
horasTemp = new String(horasTemp);
var token = horasTemp.split('.');

var minutosSubtrai = token[0] * 60;
var minutosTemp = minutos - minutosSubtrai;

console.log(minutosTemp);

var resultado = token[0] + ":" + minutosTemp;

console.log(resultado);
