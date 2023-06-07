interface alumnos 
{
    matricula?: number;
    nombre:     string;
    edad:       number;
    email:      string;
}


const alumnos = 
{
    nombre:'Paula',
    edad:   21,
    email: 'pau@email.com'
}

console.log(alumnos);

let vector1:Array<number> = [9,8,7,6,5];
vector1.push(34);
for(let lento of vector1)
{
    console.log(lento);
}
