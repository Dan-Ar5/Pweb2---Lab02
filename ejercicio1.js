function obtenerdia (numero){
	const dias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
	return dias [numero];
}

	const numeroHoy = new Date().getDay();
	const diaHoy = obtenerdia(numeroHoy);

	console.log(diaHoy);

