

const productos = []





const divProductos = document.getElementById('divProductos')

fetch("../json/productos.json").then(res=>res.json()).then(productos => {

	productos.forEach(producto=>{
        divProductos.innerHTML += 
        `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div id="${producto.id}" class="card d-flex align-items-center card-style" style="width: 18rem;">
                <h5 class="card-title d-flex row justify-content-center nombre-producto">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio}</p>
                <img class="container-img" src="../assets/images/${producto.imagen}">
                <div class="card-body">
                     <button id=${producto.id} class="btn btn-primary btn-agregar-producto">Añadir</button>
                     
                </div>     
            </div>
        </div>
        `

    })
	
const botonesAñadir = document.querySelectorAll('.btn-primary')
 
    
botonesAñadir.forEach(boton=>{
    boton.onclick = () => {

            const seleccionado = productos.find((prod) => prod.id === parseInt(boton.id))

            const prodCarrito = { ...seleccionado, cantidad:1}

            const indexCarrito = carrito.findIndex((p)=>p.id === prodCarrito.id)
        
            if(indexCarrito === -1){
                carrito.push(prodCarrito)
            } else {
                carrito[indexCarrito].cantidad ++
            }

            localStorage.setItem('carrito',JSON.stringify(carrito))
            console.log(carrito)
            contadorCarrito() 

            Toastify({
                text: `${prodCarrito.nombre} - Agregado al carrito`,
                duration: 3000,
                gravity: "top",
                position:"center",
                style: {
                  background: "#FFa300",
                }
              }).showToast();

        }
        
    })


})	



let carrito = JSON.parse(localStorage.getItem('carrito')) || []




const saveLocal = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}


const containerVerCarrito = document.getElementById("containerVerCarrito")   
const verCarrito = document.getElementById("verCarrito")
const cantCarrito = document.getElementById("cantCarrito")


let botonVaciarCarrito = () => {

    const vaciarCarrito = document.getElementById("vaciarCarrito")
    vaciarCarrito.addEventListener("click", () => {
    localStorage.clear()
})

}



feather.replace()
