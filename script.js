function cambiarPrecio() {

    let calidad = document.getElementById("calidad");
    let precio = document.getElementById("precio");

    let valor = calidad.value;

    precio.innerHTML = "$" + Number(valor).toLocaleString("es-CL");

}


function pedirWhatsapp() {

    let calidad = document.getElementById("calidad");
    let talla = document.getElementById("talla");
    let color = document.getElementById("color");
    let precio = document.getElementById("precio");


    let mensaje =
    "Hola, quiero consultar disponibilidad de:\n\n" +
    "Producto: Air Jordan 4 Military Black\n" +
    "Color: " + color.value + "\n" +
    "Talla: " + talla.value + "\n" +
    "Calidad: " + calidad.options[calidad.selectedIndex].text + "\n" +
    "Precio: " + precio.innerText;


    let whatsapp =
    "https://wa.me/56986678393?text=" + encodeURIComponent(mensaje);


    window.open(whatsapp, "_blank");

}