Patrón de Filtro de Tubería
Este es un ejemplo básico de implementación del patrón de filtro de tubería en JavaScript.

Clases

Filtro: La clase base para todos los filtros, que define el método abstracto procesar.
TuberIa: La clase que representa la tubería de filtros, que permite agregar filtros y procesar datos.
FiltroPar: Un filtro que hereda de Filtro y filtra los datos que son pares.
FiltroMayorQue5: Un filtro que hereda de Filtro y filtra los datos que son mayores que 5.
FiltroMenorQue10: Un filtro que hereda de Filtro y filtra los datos que son menores que 10.
Uso

Cree una instancia de la clase TuberIa.
Agregue filtros a la tubería utilizando el método agregarFiltro.
Procese los datos pasando por la tubería de filtros utilizando el método procesar.
Ejemplo

En este ejemplo, se crea una instancia de la clase TuberIa y se agregan tres filtros: FiltroPar, FiltroMayorQue5 y FiltroMenorQue10. Luego, se procesan los datos pasando por la tubería de filtros y se imprime el resultado final.

Nota

Este es un ejemplo básico y no incluye manejo de errores ni persistencia de datos. Está destinado solo para fines educativos.
