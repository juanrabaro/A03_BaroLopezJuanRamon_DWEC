
// Creamos clase Persona
const Persona = {
    nombre: "",
    edad: 0,
    genero: "",
      
    getInfo: function() {
        var div = document.getElementById("contenido")
        var nombrePersona = document.createElement("p")
        nombrePersona.id = "nombrePersona"
        nombrePersona.textContent = "Nombre: " + this.nombre
        var edadPersona = document.createElement("p")
        edadPersona.id = "edadPersona"
        edadPersona.textContent = "Edad: " + this.edad
        var generoPersona = document.createElement("p")
        generoPersona.id = "generoPersona"
        generoPersona.textContent = "Genero: " + this.genero

        div.appendChild(nombrePersona)
        div.appendChild(edadPersona)
        div.appendChild(generoPersona)
        var espacio = document.createElement("br")
        div.appendChild(espacio)
    }
}

// Objeto persona
const persona1 = Object.create(Persona)
persona1.nombre = "Juan"
persona1.edad = 20
persona1.genero = "Hombre"

persona1.getInfo()


// Creamos clase Estudiante
const Estudiante = Object.create(Persona)
Estudiante.curso = "No asignado"
Estudiante.grupo = "No asignado"
Estudiante.matricular = function(curso, grupo) {
    this.curso = curso
    this.grupo = grupo
}
Estudiante.getInfo = function() {
    var div = document.getElementById("contenido")
    var nombreEstudiante = document.createElement("p")
    nombreEstudiante.id = "nombreEstudiante"
    nombreEstudiante.textContent = "Nombre: " + this.nombre
    var edadEstudiante = document.createElement("p")
    edadEstudiante.id = "edadEstudiante"
    edadEstudiante.textContent = "Edad: " + this.edad
    var generoEstudiante = document.createElement("p")
    generoEstudiante.id = "generoEstudiante"
    generoEstudiante.textContent = "Genero: " + this.genero
    var cursoEstudiante = document.createElement("p")
    cursoEstudiante.id = "cursoEstudiante"
    cursoEstudiante.textContent = "Curso: " + this.curso
    var grupoEstudiante = document.createElement("p")
    grupoEstudiante.id = "grupoEstudiante"
    grupoEstudiante.textContent = "Grupo: " + this.grupo

    div.appendChild(nombreEstudiante)
    div.appendChild(edadEstudiante)
    div.appendChild(generoEstudiante)
    div.appendChild(cursoEstudiante)
    div.appendChild(grupoEstudiante)
    var espacio = document.createElement("br")
    div.appendChild(espacio)
}

// Objeto estudiante
const estudiante1 = Object.create(Estudiante)
estudiante1.nombre = "Maria"
estudiante1.edad = 20
estudiante1.genero = "Femenino"

estudiante1.matricular("Matemáticas", "Grupo A")
estudiante1.getInfo()



// Creamos clase Profesor
const Profesor = Object.create(Persona)
Profesor.modulo = "No asignado"
Profesor.nivel = "No asignado"
Profesor.imparte = function(modulo, nivel) {
    this.modulo = modulo
    this.nivel = nivel
}
Profesor.getInfo = function() {
    var div = document.getElementById("contenido")
    var nombreProfesor = document.createElement("p")
    nombreProfesor.id = "nombreProfesor"
    nombreProfesor.textContent = "Nombre: " + this.nombre
    var edadProfesor = document.createElement("p")
    edadProfesor.id = "edadProfesor"
    edadProfesor.textContent = "Edad: " + this.edad
    var generoProfesor = document.createElement("p")
    generoProfesor.id = "generoProfesor"
    generoProfesor.textContent = "Genero: " + this.genero
    var moduloProfesor = document.createElement("p")
    moduloProfesor.id = "moduloProfesor"
    moduloProfesor.textContent = "Módulo: " + this.modulo
    var nivelProfesor = document.createElement("p")
    nivelProfesor.id = "nivelProfesor"
    nivelProfesor.textContent = "Nivel: " + this.nivel

    div.appendChild(nombreProfesor)
    div.appendChild(edadProfesor)
    div.appendChild(generoProfesor)
    div.appendChild(moduloProfesor)
    div.appendChild(nivelProfesor)
    var espacio = document.createElement("br")
    div.appendChild(espacio)
}

// Objeto profesor
const profesor1 = Object.create(Profesor)
profesor1.nombre = "Antonio"
profesor1.edad = 40
profesor1.genero = "Masculino"

profesor1.imparte("DAW", "primero")
profesor1.getInfo()

