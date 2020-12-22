const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descricion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear','Crear un elemento por hacer',{
        descripcion
    })
    .command('actualizar','Actualiza el estado completado de una tarea',{
        descripcion,
        completado
    })
    .command('borrar','Borrar una tarea por hacer',{
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}

// comando crear 'Crear un elemento por hacer'
//     --descripcion -d

// comando actualizar 'Actualiza el estado completado de una tarea'
//     --descripcion -d
//     --completado -c true

//     --help