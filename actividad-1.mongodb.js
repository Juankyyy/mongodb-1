db.createCollection("users");

db.users.remove({});

db.users.insertMany([
    {
        nombres: "Juanky",
        apellidos: "Lindo",
        correo: "juanky@gmail.com",
        genero: "M",
        ciudad: "Medellin",
        pais: "Colombia",
        salario: 1000,
        edad: 19,
        altura: 170,
        peso: 154
    },
    {
        nombres: "Mateo",
        apellidos: "Nappa",
        correo: "mateo@gmail.com",
        genero: "M",
        ciudad: "Itagui",
        pais: "Colombia",
        salario: 500,
        edad: 25,
        altura: 168,
        peso: 200
    },
    {
        nombres: "Wilmar",
        apellidos: "Puerta",
        correo: "wilmar@gmail.com",
        genero: "M",
        ciudad: "Medellin",
        pais: "Colombia",
        salario: 2000,
        edad: 25,
        altura: 166,
        peso: 120
    },
    {
        nombres: "Antonio",
        apellidos: "Muñoz",
        correo: "antonio@gmail.com",
        genero: "M",
        ciudad: "Medellin",
        pais: "Colombia",
        salario: 1100,
        edad: 27,
        altura: 163,
        peso: 200
    },
    {
        nombres: "Fernando",
        apellidos: "Gomez",
        correo: "fernando@gmail.com",
        genero: "M",
        ciudad: "Medellin",
        pais: "Colombia",
        salario: 1500,
        edad: 26,
        altura: 164,
        peso: 135
    },
    {
        nombres: "Santi",
        apellidos: "Acevedo",
        correo: "santi@gmail.com",
        genero: "M",
        ciudad: "Bello",
        pais: "Colombia",
        salario: 2500,
        edad: 20,
        altura: 175,
        peso: 130
    },
    {
        nombres: "Isabella",
        apellidos: "Guzman",
        correo: "isabella@gmail.com",
        genero: "F",
        ciudad: "Medellín",
        pais: "Colombia",
        salario: 1700,
        edad: 17,
        altura: 168,
        peso: 125
    },
    {
        nombres: "Camila",
        apellidos: "Díaz",
        correo: "camiladiaz@gmail.com",
        genero: "F",
        ciudad: "Londres",
        pais: "Reino Unido",
        salario: 3050,
        edad: 24,
        altura: 167,
        peso: 130
    }, 
    {
        nombres: "Javier",
        apellidos: "González",
        correo: "javiergonz@gmail.com",
        genero: "M",
        ciudad: "Paris",
        pais: "Francia",
        salario: 1450,
        edad: 31,
        altura: 179,
        peso: 168
    },
    {
        nombres: "Pedro",
        apellidos: "Hernandez",
        correo: "pedro@gmail.com",
        genero: "M",
        ciudad: "Sidney",
        pais: "Australia",
        salario: 3500,
        edad: 42,
        altura: 181,
        peso: 235
    },
    {
        nombres: "Mauro",
        apellidos: "Lombardo",
        correo: "duki@gmail.com",
        genero: "M",
        ciudad: "Buenos Aires",
        pais: "Argentina",
        salario: 4000,
        edad: 24,
        altura: 172,
        peso: 250
    },
    {
        nombres: "Mikaela",
        apellidos: "Astel",
        correo: "mikoo@gmail.com",
        genero: "F",
        ciudad: "Madrid",
        pais: "España",
        salario: 2900,
        edad: 24,
        altura: 168,
        peso: 120
    },
    {
        nombres: "Jennifer",
        apellidos: "Vazquez",
        correo: "bratty@gmail.com",
        genero: "F",
        ciudad: "Culiacan",
        pais: "Mexico",
        salario: 1800,
        edad: 23,
        altura: 165,
        peso: 130
    },
    {
        nombres: "Mark",
        apellidos: "Warren",
        correo: "mark@gmail.com",
        genero: "M",
        ciudad: "New York",
        pais: "Estados Unidos",
        salario: 2222,
        edad: 32,
        altura: 175,
        peso: 163
    },
    {
        nombres: "Lauren",
        apellidos: "Hendricks",
        correo: "lauren@gmail.com",
        genero: "F",
        ciudad: "Toronto",
        pais: "Canada",
        salario: 3210,
        edad: 40,
        altura: 171,
        peso: 157
    },
    {
        nombres: "David",
        apellidos: "Damiano",
        correo: "mandamiano@gmail.com",
        genero: "M",
        ciudad: "Roma",
        pais: "Italia",
        salario: 2610,
        edad: 27,
        altura: 176,
        peso: 166
    },
    {
        nombres: "Hans",
        apellidos: "Schneider",
        correo: "",
        genero: "M",
        ciudad: "Múnich",
        pais: "Alemania",
        salario: 3000,
        edad: 35,
        altura: 178,
        peso: 170
    },
    {
        nombres: "Elena",
        apellidos: "García",
        correo: "",
        genero: "F",
        ciudad: "Madrid",
        pais: "España",
        salario: 2200,
        edad: 31,
        altura: 170,
        peso: 150
    },
    {
        nombres: "Claire",
        apellidos: "Dubois",
        correo: "claire@eoutlook.com",
        genero: "F",
        ciudad: "París",
        pais: "Francia",
        salario: 4330,
        edad: 34,
        altura: 168,
        peso: 140
    },
    {
        nombres: "Gabriela",
        apellidos: "Santos",
        correo: "gabi@gmail.com",
        genero: "F",
        ciudad: "São Paulo",
        pais: "Brasil",
        salario: 2900,
        edad: 29,
        altura: 167,
        peso: 115
    },
    {
        nombres: "Diego",
        apellidos: "López",
        correo: "diego@gmail.com",
        genero: "M",
        ciudad: "Santiago",
        pais: "Chile",
        salario: 2700,
        edad: 31,
        altura: 1.75,
        peso: 175
    },
    {
        nombres: "Priya",
        apellidos: "Patel",
        correo: "priya@outlook.com",
        genero: "F",
        ciudad: "Mumbai",
        pais: "India",
        salario: 2500,
        edad: 28,
        altura: 163,
        peso: 155
    },
    {
        nombres: "Rafael",
        apellidos: "Silva",
        correo: "rafael@outlook.com",
        genero: "M",
        ciudad: "Rio de Janeiro",
        pais: "Brasil",
        salario: 2852,
        edad: 33,
        altura: 180,
        peso: 178
    },
    {
        nombres: "Lucía",
        apellidos: "González",
        correo: "luci@example.com",
        genero: "F",
        ciudad: "Mar Del Plata",
        pais: "Argentina",
        salario: 2000,
        edad: 23,
        altura: 170,
        peso: 160
    },
    {
        nombres: "Neha",
        apellidos: "Patil",
        correo: "nehal@gmail.com",
        genero: "F",
        ciudad: "Bangalore",
        pais: "India",
        salario: null,
        edad: 24,
        altura: 163,
        peso: 155
    },
    {
        nombres: "Aryan",
        apellidos: "Sharma",
        correo: "aryan@outlook.com",
        genero: "M",
        ciudad: "Delhi",
        pais: "India",
        salario: null,
        edad: 26,
        altura: 175,
        peso: 170
    }
]);

db.users.find();

// 1
db.users.find({ edad : { $gt: 18 } });

// 2
db.users.find({ ciudad : { $in: ["Londres", "Paris"] } });

// 3
db.users.find({ 
    $and: [
        { salario: { $gte: 2000 } },
        { edad: { $lt: 30 } }
    ]
});

// 4
db.users.find({
    $and : [
        { pais : "España" },
        { salario: { $gt: 3000 } }
    ]
});

// 5
db.users.find({
    $and: [
        { edad: { $gte: 25 } },
        { edad: { $lte: 35 } }
    ]
});

// 6
db.users.find({ pais : { $ne: "Estados Unidos" } });

// 7
db.users.find({
    $or: [
        { $and: [
            { ciudad : "Londres" },
            { salario: { $gt: 2500 } }
        ]},
        { edad : { $gt: 30 }}
    ]
});

// 8
db.users.find({
    $and: [
        { pais : "Australia" },
        { peso : { $gt: 140 } }
    ]
});

// 9
db.users.find({
    $and: [
        { ciudad : { $ne: "Londres" }},
        { ciudad : { $ne: "Paris" }}
    ]
});

// 10
db.users.find({
    $or: [
        { salario : { $lt: 2000 } },
        { edad : { $gt: 40 } }
    ]
})

// 11
db.users.find({
    $or: [
        { $and: [
            { pais : "Canada" },
            { salario : { $gt: 4000 } }
        ]},
        { altura : { $gt: 180 } }
    ]
});

// 12
db.users.find({
    $and : [
        { pais : "Italia" },
        { edad : { $gt: 20 } },
        { edad : { $lt: 30 } }
    ]
});

// 13
db.users.find({ correo : "" });

// 14
db.users.find({
    $and: [
        { pais : "Francia" },
        { salario : { $gt: 3000 } },
        { salario : { $lt: 5000 } }
    ]
});

// 15
db.users.find({
    $and: [
        { pais : "Brasil" },
        { $or: [
            { peso : { $lt: 120 } },
            { peso : { $gt: 140 } }
        ]}
    ]
});

// 16
db.users.find({
    $and: [
        { $or: [
            { pais : "Argentina" },
            { pais : "Chile" }
        ]},
        { edad : { $lt: 25 } }
    ]
});

// 17
db.users.find({
    $and: [
        { pais : { $ne: "España" } },
        { pais : { $ne: "Mexico" } },
        { salario : { $lt: 3000 } }
    ]
});

// 18
db.users.find({
    $and: [
        { pais : "Alemania" },
        { $or: [
            { salario : { $lt: 4000 } },
            { edad : { $gt: 35 } }
        ]}
    ]
});

// 19
db.users.find({
    $and: [
        { pais : { $ne: "Colombia" } },
        { altura : { $lt: 170 } }
    ]
});

// 20
db.users.find({
    $and: [
        { pais : "India" },
        { salario : null }
    ]
});