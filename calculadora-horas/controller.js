angular.module("app").controller("CalculoHorasController", function($scope) {

	$scope.hora = {
		entrada: null,
		saidaAlmoco: '13:00',
		entradaAlmoco: '14:00',
		saida: null,
		resultado: '00:00'		
	};

	$scope.calcularHora = function() {

		if(!$scope.saidaAlmoco) $scope.saidaAlmoco = "00:00";
		if(!$scope.entradaAlmoco) $scope.entradaAlmoco = "00:00";

		var ent = _calcularMinutos($scope.hora.entrada);
		var sadA = _calcularMinutos($scope.hora.saidaAlmoco);
		var entA = _calcularMinutos($scope.hora.entradaAlmoco);
		var sad = _calcularMinutos($scope.hora.saida);

		var minutos = sad - ent;
		var tempoAlmoco = entA - sadA;
		minutos = minutos - tempoAlmoco;

		$scope.hora.resultado = _minutosParaHoras(minutos);
	};

	function _calcularMinutos(value) {
		var token = value.split(':');
		var minutos = new Number(token[1]);
		var horasParaMinutos = new Number(token[0] * 60);

		return minutos + horasParaMinutos;
	}

	function _minutosParaHoras(minutos) {
		var horasTemp = minutos / 60;
		horasTemp = new String(horasTemp);
		var token = horasTemp.split('.');

		var minutosSubtrai = token[0] * 60;

		if(token[1] == "0") return token[0] + ":00"

		var minutosTemp = minutos - minutosSubtrai;

		var resultado = token[0] + ":" + minutosTemp;

		return resultado;
	}

});