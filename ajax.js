function loadLDocA(fichero)
{
    let http = new XMLHttpRequest(); //Se crea petición al servidor
    http.open("GET",fichero,true); //Se pide procesar el fichero. Continua la ejecución hasta recibir la respuesta
    //http.setRequestHeader("Content-type", "text/xml");
    http.send();
    http.addEventListener('load', (event) => {  //Cuando se reciba la respuesta, se ejecuta esta función
        if(http.status === 200) {
            if(fichero.split(".")[1] == "xml")
            {
                gestionarFicheroXML(http.responseXML)
            }
            else
            {
			    gestionarFicheroTXT(http.responseText)
            }
		}})
}

function gestionarFicheroXML(xml){

    let capa = document.querySelector(".contenedor")

    let librerias = xml.getElementsByTagName("libreria");

    let resultado = "";

    for(let i = 0; i < librerias.length; i++){

        let nombre = librerias[i].getElementsByTagName("nombre")[0].textContent;

        resultado += "<table border='1'>";
        resultado += "<caption>" + nombre + "</caption>";

        resultado += "<tr>";
        resultado += "<th>Título</th>";
        resultado += "<th>Autor</th>";
        resultado += "<th>Precio</th>";
        resultado += "</tr>";

        let libros = librerias[i].getElementsByTagName("libro");

        for(let j = 0; j < libros.length; j++){

            let titulo = libros[j].getElementsByTagName("titulo")[0].textContent;
            let autor = libros[j].getElementsByTagName("autor")[0].textContent;
            let precio = libros[j].getElementsByTagName("precio")[0].textContent;

            resultado += "<tr>";
            resultado += "<td>" + titulo + "</td>";
            resultado += "<td>" + autor + "</td>";
            resultado += "<td>" + precio + "</td>";
            resultado += "</tr>";
        }

        resultado += "</table><br>";
    }

    capa.innerHTML = resultado;
}

function gestionarFicheroTXT(txt){

    let capa = document.querySelector(".contenedor");

    let lineas = txt.split("\n");

    let resultado = "";

    for(let i = 0; i < lineas.length; i++){

        let mensaje = lineas[i].trim();

        if(mensaje !== ""){

            if(i % 2 === 0){
                resultado += "<div style='text-align:left; margin:10px; background:white; padding:10px; width:60%;'>"
                          + mensaje +
                          "</div>";
            }else{
                resultado += "<div style='text-align:right; margin:10px auto; background:#cce5ff; padding:10px; width:60%;'>"
                          + mensaje +
                          "</div>";
            }
        }
    }

    capa.innerHTML = resultado;
}




loadLDocA("libros.xml");