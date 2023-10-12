// Clase Empleado
const Empleado = {
    id: 0,
    nombre: "",
    apellidos: "",
    fechaNacimiento: Date,
    concentrarse: function() {
        console.log("Se concentra");
    }
}

// Clase CEO
const CEO = Object.create(Empleado)
CEO.jefesAsignados = [ ]
CEO.viajar = function() {
    console.log("Viaja");
}
CEO.añadirJefe = function(jefe) {
    this.jefesAsignados.push(jefe)
}
CEO.dirigirJefes = function() {
    console.log("Dirigir jefes");
}

// Clase Jefe
const Jefe = Object.create(Empleado)
Jefe.dptoResponsable = ""
Jefe.equipo = [  ]
Jefe.añadirAlEquipo = function(programador) {
    this.equipo.push(programador)
}
Jefe.reunirseConEquipo = function() {
    console.log("Reunirse con el equipo");
}

// Clase Programador
const Programador = Object.create(Empleado)
Programador.titulacion = ""
Programador.experiencia = 0
Programador.programar = function() {}



// Objetos Programador
const programador1 = Object.create(Programador)
programador1.id = 1
programador1.nombre = "Juan"
programador1.apellidos = "Baro"
programador1.fechaNacimiento = new Date(2000, 0, 15)
programador1.titulacion = "Ingeniero"
programador1.experiencia = 2
const programador2 = Object.create(Programador)
programador2.id = 2
programador2.nombre = "Antonio"
programador2.apellidos = "Serrano"
programador2.fechaNacimiento = new Date(2002, 7, 20)
programador2.titulacion = "Desarrollador Web"
programador2.experiencia = 3

// Objetos Jefe
const jefe1 = Object.create(Jefe)
jefe1.id = 3
jefe1.nombre = "Alfonso"
jefe1.apellidos = "Gutierrez"
jefe1.fechaNacimiento = new Date(1990, 5, 10)
jefe1.dptoResponsable = "informatica"
jefe1.equipo = [  ]
jefe1.añadirAlEquipo(programador1)
jefe1.añadirAlEquipo(programador2)
const jefe2 = Object.create(Jefe)
jefe2.id = 4
jefe2.nombre = "Alonso"
jefe2.apellidos = "Martínez"
jefe2.fechaNacimiento = new Date(1995, 2, 10)
jefe2.dptoResponsable = "informatica"
jefe2.equipo = [  ]
jefe2.añadirAlEquipo(programador1)
jefe2.añadirAlEquipo(programador2)


const resultadoElemento = document.getElementById("contenido");
const jefe1Pantalla = `
  <p>Id: ${jefe1.id}</p>
  <p>Nombre: ${jefe1.nombre}</p>
  <p>Apellidos: ${jefe1.apellidos}</p>
  <p>Fecha nacimiento: ${jefe1.fechaNacimiento}</p>
  <p>Departamento responsable: ${jefe1.dptoResponsable}</p>
  <p>Equipo: ${jefe1.equipo[0].nombre}, ${jefe1.equipo[1].nombre}</p>
`
const jefe2Pantalla = `
  <p>Id: ${jefe2.id}</p>
  <p>Nombre: ${jefe2.nombre}</p>
  <p>Apellidos: ${jefe2.apellidos}</p>
  <p>Fecha nacimiento: ${jefe2.fechaNacimiento}</p>
  <p>Departamento responsable: ${jefe2.dptoResponsable}</p>
  <p>Equipo: ${jefe2.equipo[0].nombre}, ${jefe2.equipo[1].nombre}</p>
`
resultadoElemento.innerHTML = jefe1Pantalla + jefe2Pantalla

// Objeto CEO
const ceo1 = Object.create(CEO)
ceo1.id = 5
ceo1.nombre = "Victor"
ceo1.apellidos = "Giménez"
ceo1.fechaNacimiento = new Date(1991, 3, 7)
ceo1.jefesAsignados = [  ]
ceo1.añadirJefe(jefe1)
ceo1.añadirJefe(jefe2)

const ceo1Pantalla = `
  <p>Id: ${ceo1.id}</p>
  <p>Nombre: ${ceo1.nombre}</p>
  <p>Apellidos: ${ceo1.apellidos}</p>
  <p>Fecha nacimiento: ${ceo1.fechaNacimiento}</p>
  <p>Jefes asignados: ${ceo1.jefesAsignados[0].nombre}, ${ceo1.jefesAsignados[1].nombre}</p>
`
resultadoElemento.innerHTML = jefe1Pantalla + jefe2Pantalla + ceo1Pantalla

