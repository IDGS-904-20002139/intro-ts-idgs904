(() => {
    interface Alumno{
        matricula: number;
        nombre:    string;
        edad:      number;
        correo:    string;
        grupo:      Grupo;
    }
    
    interface Grupo{
        grupo: string;
        year:  number;
    
    }

    const alumno: Alumno={
        matricula: 12345,
        nombre:    'Paula',
        edad:      21,
        correo:    'pau@email.com',
        grupo:{
            grupo: 'idgs',
            year:  2023,
        }
    }
    // console.log(`la matricula es: ${alumno.matricula}`)
    // console.log(`el nombre es: ${alumno.nombre}`)
    // console.log(`el grupo es: ${alumno.grupo.grupo}`)
    // console.log(`el año del grupo es: ${alumno.grupo.year}`)

    const { matricula, nombre, edad, correo, grupo: objGrupo } = alumno;
    const { grupo, year } = objGrupo;

    console.log(`la matricula es: ${matricula}`)
    console.log(`el nombre es: ${nombre}`)
    console.log(`el grupo es: ${grupo}`)
    console.log(`el año del grupo es: ${year}`)
    
    const gps:string[]=['IDGS','IENV','IREDES'];
    console.log(`grupo 1: ${gps[0]}`)
    console.log(`grupo 2: ${gps[1]}`)
    console.log(`grupo 3: ${gps[2]}`)

    const[a,b]=gps;
    console.log(`grupo 1: ${a}`)
})