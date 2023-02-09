//Bienvenida al Usuario
let bienvenidaAUsuario = prompt("Hola, ingrese su nombre completo con un maximo de 20 caracteres para acceder a la pagina");
let rangoNombre = bienvenidaAUsuario.slice(0,25);

if(rangoNombre >= bienvenidaAUsuario){
    alert("Bienvenido a Tatto Store: " + rangoNombre);
}else{
    alert("Error: Superaste el maximo de caracteres.");
}


//Consulta de Productos
function consultaProductos(){
    let seleccionProducto = prompt("Ingrese el prodcuto que desea consultar 'maquinas inalambricas', 'fuentes', 'agujas', 'cremas'.");

        switch (seleccionProducto) {
            case "maquinas inalambricas":
                alert("1.Exo: $8.000 | 2.Emily: $10.000 | 3.Monster: $12.500 | 4.thunderlord: $14.000");
            break;
    
            case "fuentes":
                alert("1.Assassin: $18.000 | 2.Klon Aurora $25.000 | 3. Clipcord $15.000");
            break;
    
            case "agujas":
                alert("1.Agujas surtidas x 20u $5.000 | 2.Agujas x 50u $9.000 | 3.Agujas x 100u $12.000");
            break;
    
            case "cremas":
                alert("1.Post tattoo $3.000 | 2.Cleaner $1.500 | 3.Anestesica $5.000");
            break;
    
            default: 
                alert("No a ingresado un numero valido.");
            break;
        }
    }

    for(let i = 1; i <= 3; i++){
    consultaProductos();
}
    
// function calculadorCuotasSinInteres(){
//     let ingresoMontoACalcular = Number(prompt("Ingresa el monto del o de los productos que desea comprar para calcular cuanto le quedaria en 6 cuotas sin interes:"));
//     return ingresoMontoACalcular / 6;
// }
// let resultadoMontoCalular = alert(calculadorCuotasSinInteres());


//OBJETOS
class Insumos{
    constructor(producto,modelo,precio,stock){
        this.producto = producto;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
    }
    //INSUMOS CON 20% DE DESCUENTO
    descuentoDelVeinteEnInsumos(){
        console.log("El descuento del 20%, es equivalente a:  " + "$" + this.precio * 0.20);
    }
}

const exo = new Insumos('Maquina Inalambrica', 'Exo', 8000, 5);
const emily = new Insumos('Maquina Inalambrica','Emily', 10000, 3);
const monster = new Insumos('Maquina Inalambrica','Monster',12500, 7);
const thunderlord = new Insumos('Maquina Inalambrica', 'thunderlord', 14000, 2);

console.log(exo.descuentoDelVeinteEnInsumos());


//ARRAYS
const tatuajes = [
    {estilo: "Puntillismo", precio: 20000},
    {estilo: "Tradicional", precio: 15000},
    {estilo: "Realismo", precio: 30000},
    {estilo: "Geometrico", precio: 10000},
    {estilo: "Full color", precio: 18000},
    {estilo: "Gotico", precio: 12000}  
];

const busqueda = tatuajes.filter((el)=>el.estilo.includes("G"));
console.log(busqueda);


const pircing = [
    {lugar: "Nariz", precio: 2000},
    {lugar: "Oreja", precio: 1500},
    {lugar: "Lengua", precio: 1200},
    {lugar: "Ceja", precio: 1000},
    {lugar: "labio", precio: 800},
];

pircing.forEach(pir => {
    console.log(pir);
});


const murales = [
    {metros: 5, precio: 5000},
    {metros: 10, precio: 10000},
    {metros: 15, precio: 15000},
    {metros: 20, precio: 20000},
    {metros: 25, precio: 25000},
    {metros: 30, precio: 30000},
];

const ofertasMurales = murales.map((el)=>{
    if(el.metros > 15){
        return{
            metros: el.metros,
            price: el.precio * 0.7,
        };
    }else{
        return{
            metros: el.metros,
            price: el.precio,
        };
    }
});
console.log(ofertasMurales); 


