function actualizarPrecio(select){

    let producto = select.closest(".producto");
    let precio = producto.querySelector(".precio");

    let valor = select.value;

    precio.innerHTML = "$" + Number(valor).toLocaleString("es-CL");

}



function pedirWhatsapp(nombreProducto){

    let boton = event.target;
    let producto = boton.closest(".producto");

    let selects = producto.querySelectorAll("select");

    let color = selects[0].value;
    let talla = selects[1].value;
    let calidad = selects[2].options[selects[2].selectedIndex].text;
    let precio = producto.querySelector(".precio").innerText;


    let mensaje = 
    "Hola, quiero consultar disponibilidad de:\n\n" +
    "Producto: " + nombreProducto + "\n" +
    "Color: " + color + "\n" +
    "Talla: " + talla + "\n" +
    "Calidad: " + calidad + "\n" +
    "Precio: " + precio;


    let whatsapp = 
    "https://wa.me/56986678393?text=" + encodeURIComponent(mensaje);


    window.open(whatsapp, "_blank");

}
