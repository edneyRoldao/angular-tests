var value = "00:00"
var token = value.split(':');
var minutos = new Number(token[1]);
var horasParaMinutos = new Number(token[0] * 60);

console.log(minutos + horasParaMinutos);