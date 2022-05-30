//---------IF-------------------
//1=mal estado
//2=buen estado
function calidad() {
    var c = 2;
    if (c = 2) {
        document.write("<h1>producto en buen estado</h1>");        
    }
}
//----------IF...ELSE------------------
function mostrarMensaje1() { 

    var nombre;
    
    nombre = prompt ('Por favor introduce tu nombre:');
    
    if (nombre =="") { alert ('No has introducido ningún nombre'); }
    
    else { alert ('Hola '+nombre + '. Bienvenido a esta página web.'); }
}    
//----------ELSE IF------------------
function etapas (a){
    
    var edad = a; 

    if (edad >=65 && edad<=120){
        document.write("ANCIANO");
    }else if (edad >=31 && edad<=64){
        document.write("ADULTO");
    }else if (edad >=18 && edad<=30){
        document.write("JOVEN");
    }else if (edad >=13 && edad<=17){
        document.write("ADOLESCENTE");
    }else if (edad >=2 && edad<=12){
        document.write("NIÑO");
    }else if (edad >=0 && edad<=1){
        document.write("BEBÉ");
    }else{
        document.write("EDAD INCORRECTA");
    }

}
//--------SWITCH--------------------
function compraswitch() {
    var a = 7;
    switch (a) {
        case 2:
            document.write("<h4>abastecer producto</h4>");
            break;
        case 7:
            document.write("<h4>producto abastecido</h4>");
            break;    
        case 10:
            document.write("<h4>oferta de producto</h4>");
            break; 
        default:
            document.write("<h4>no especificado</h4>");
            break;
    }
}