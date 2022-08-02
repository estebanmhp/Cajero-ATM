class Billete 
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
        
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
}

function entregarDinero()
{
    var entregado = [];
    var t = document.getElementById("dinero");
    dinero = t.value;
    if (total >= dinero)
    {
        for(var bi of caja)
        {
            if(dinero >= 0)
            {
                div = Math.floor(dinero / bi.valor);
                if(div > bi.cantidad)
                {
                    papeles = bi.cantidad;
                }
                else
                {
                    papeles = div;
                }
                bi.cantidad = bi.cantidad - papeles;
                for (var i = 0; i < papeles; i++)
			    {
			    	entregado.push (new Billete(bi.valor, papeles));
			    }
                dinero = dinero - (bi.valor * papeles);
            }
        }
        if (dinero == 0)
        {
            result.innerHTML += "El valor a entregar sera de la siguiente manera: <br/>";
		    for(var e of entregado)
		    {		
		    	result.innerHTML += "<img src=" + e.imagen.src + " />";
		    }
            console.log(e);
		    result.innerHTML += "<hr />";
            saldo();
        }
        else
        {
            result.innerHTML = "No te puedo dar la cantidad que solicitas :(" + "<br/>" + "Intenta con otro valor según el saldo del cajero " + "<hr/>"; 
        } 
    }
    else
    {
        result.innerHTML = "No te puedo dar la cantidad que solicitas :(" + "<br/>" + "Intenta con otro valor según el saldo del cajero " + "<hr/>"; 
    }
}

function saldo()
{
    total = 0;
    var saldo = document.getElementById("saldo");
    for (var t of caja)
	{
		total = total + t.valor * t.cantidad;
	}
	console.log(total);
    saldo.innerHTML = "El saldo del cajero es " + "<strong>" + total + "</strong>" + "<br/>" + "Ten en cuenta que solo acepta multiplos de 10";
}


var imagenes = [];
imagenes["50"] = "billet50.png";
imagenes["20"] = "billete20.png";
imagenes["10"] = "billete10.png";


var caja = [];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 3));
caja.push(new Billete(10, 3));


var dinero = 0;
var div = 0;
var papeles = 0;
var total = 0;

var result = document.getElementById("resultado");
var nuevo = document.getElementById("snuevo");
var button = document.getElementById("extraer");
button.addEventListener("click", entregarDinero);

saldo();

