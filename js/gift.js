const cuadrito = document.getElementById("area_de_dibujo");
const lienzo = cuadrito.getContext("2d");
cuadrito.addEventListener("mousedown", presionarMouse);
cuadrito.addEventListener("mousemove", dibujarMouse);
cuadrito.addEventListener("mouseup", dejardibujo);
cuadrito.addEventListener("touchstart", dedito);
 var inicio = 0;
 var x;
 var y;
const limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", clean);


function dedito(){

}


function clean(){
    cuadrito.width=cuadrito.width;
    dibujarlinea("black", 0, 0, 0, 400);
    dibujarlinea("black", 0, 0, 400, 0);
    dibujarlinea("black", 400, 0, 400, 400);
    dibujarlinea("black", 0, 400, 400, 400);

}false;


function presionarMouse(star)
{
    inicio= 1
    mouseX = star.offsetX;
    mouseY = star.offsetY;

}




function dejardibujo(star)
{
    inicio= 0
    mouseX = star.offsetX;
    mouseY = star.offsetY;
}



function dibujarMouse(star)
{   
    var colores = document.getElementById("colorcito").value;
    if( inicio==1)
    {
        
        dibujarlinea(colores, mouseX,  mouseY,star.offsetX, star.offsetY);
        mouseX = star.offsetX;
        mouseY = star.offsetY;

    }


}

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarlinea("black", 0, 0, 0, 400);
dibujarlinea("black", 0, 0, 400, 0);
dibujarlinea("black", 400, 0, 400, 400);
dibujarlinea("black", 0, 400, 400, 400);

var teclas = {
    UP: 38,
    DOWN: 40,
    RIGT: 39,
    LEFT: 37
};


document.addEventListener("keydown", dibujarTeclado);



var xt = 100;
var yt = 100;



function dibujarTeclado(evento)

{
    var colores = document.getElementById("colorcito").value;
    var movimiento = 10;
    var colorcito = colores;


    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarlinea(colorcito, xt, yt, xt, yt - movimiento);
            yt = yt - movimiento;
        break;

        case teclas.DOWN:
            dibujarlinea(colorcito, xt, yt, xt, yt+ movimiento);
            yt = yt + movimiento;
        break;

        case teclas.LEFT:
            dibujarlinea(colorcito, xt, yt, xt - movimiento, yt);
            xt = xt - movimiento;
        break;

        case teclas.RIGT:
            dibujarlinea(colorcito, xt, yt, xt + movimiento, yt);
            xt = xt + movimiento;
        break;
    }
}