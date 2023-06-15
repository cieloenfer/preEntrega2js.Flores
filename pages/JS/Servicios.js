const carrito=   [{codigo:2,tipo:"Mediacion Laboral",precio:9000},
                  {codigo:3,tipo:"Mediacion Escolar",precio:9000},]

const servicios= [{codigo:1,tipo:"Mediacion Familiar",precio:100000},
                  {codigo:2,tipo:"Mediacion Laboral",precio:9000},
                  {codigo:3,tipo:"Mediacion Escolar",precio:9000},
                  {codigo:4,tipo:"Asesoramiento legal a copropiedades",precio:200000},
                  {codigo:5,tipo:"Actualización legal según nueva ley de copropiedad",precio:200000}]

function elegirServicios(codigo) {
    let resultado = servicios.find((servicio)=> servicio.codigo === parseInt(codigo))
    return resultado
}

function finalizarCompra() {
    const contratar = new Compra(carrito)
    alert("costo total de tu compra es $" + contratar.obtenerSubtotal() + "Muchas gracias por tu elección")
}   

function Comprar(){
    let codigo = prompt("Ingresa el codigo del servicio que deseas contratar.(1,2,3,4,5)")
    let servicioElegido = elegirServicios(codigo) 
     if(servicioElegido !== undefined) {
        carrito.push(servicioElegido)
        alert( `El ${servicioElegido.tipo}se agregó al carrito.`)
        let respuesta = confirm("¿Deseas agregar otro servicio?")
        if(respuesta === true){
            Comprar()
        }else{
            finalizarCompra()
        }
    }else{
            alert("error en el código")
        }

    }

    Comprar()
