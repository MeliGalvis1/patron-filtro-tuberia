console.log("INICIO EJEMPLO BASICO DE PATRON DE FILTRO DE TUBERIA");

// Se define la clase Filtro, que es la clase base para todos los filtros
class Filtro {
  // El constructor de la clase Filtro recibe un parámetro "nombre" que se asigna a la propiedad "nombre" del objeto
  constructor(nombre) {
    this.nombre = nombre;
  }

  // El método "procesar" es un método abstracto que debe ser implementado por las clases que hereden de Filtro
  // En este caso, se lanza un error si se intenta llamar a este método sin haberlo implementado
  procesar(datos) {
    throw new Error('Método no implementado');
  }
}

// Se define la clase TuberIa, que representa la tubería de filtros
class TuberIa {
  // El constructor de la clase TuberIa inicializa un arreglo vacío de filtros
  constructor() {
    this.filtros = [];
  }

  // El método "agregarFiltro" permite agregar un filtro a la tubería
  agregarFiltro(filtro) {
    this.filtros.push(filtro);
  }

  // El método "procesar" procesa los datos pasando por cada filtro de la tubería
  // Utiliza el método "reduce" para aplicar cada filtro a los datos
  procesar(datos) {
    return this.filtros.reduce((datos, filtro) => filtro.procesar(datos), datos);
  }
}

// Se define la clase FiltroPar, que hereda de Filtro y filtra los datos que son pares
class FiltroPar extends Filtro {
  // El constructor de la clase FiltroPar llama al constructor de la clase Filtro con el nombre "Filtro par"
  constructor() {
    super('Filtro par');
  }

  // El método "procesar" filtra los datos que son pares
  procesar(datos) {
    return datos.filter((dato) => dato % 2 === 0);
  }
}

// Se define la clase FiltroMayorQue5, que hereda de Filtro y filtra los datos que son mayores que 5
class FiltroMayorQue5 extends Filtro {
  // El constructor de la clase FiltroMayorQue5 llama al constructor de la clase Filtro con el nombre "Filtro mayor que 5"
  constructor() {
    super('Filtro mayor que 5');
  }

  // El método "procesar" filtra los datos que son mayores que 5
  procesar(datos) {
    return datos.filter((dato) => dato > 5);
  }
}

// Se define la clase FiltroMenorQue10, que hereda de Filtro y filtra los datos que son menores que 10
class FiltroMenorQue10 extends Filtro {
  // El constructor de la clase FiltroMenorQue10 llama al constructor de la clase Filtro con el nombre "Filtro menor que 10"
  constructor() {
    super('Filtro menor que 10');
  }

  // El método "procesar" filtra los datos que son menores que 10
  procesar(datos) {
    return datos.filter((dato) => dato < 10);
  }
}

// Se crea una instancia de la clase TuberIa
const tuberIa = new TuberIa();

// Se agregan tres filtros a la tubería: FiltroPar, FiltroMayorQue5 y FiltroMenorQue10
tuberIa.agregarFiltro(new FiltroPar());
tuberIa.agregarFiltro(new FiltroMayorQue5());
tuberIa.agregarFiltro(new FiltroMenorQue10());

// Se define un arreglo de datos a procesar
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Se procesan los datos pasando por la tubería de filtros
const resultadonumeros = tuberIa.procesar(numeros);

// Se imprime el resultado final
console.log("Resultado final numeros: ", resultadonumeros);