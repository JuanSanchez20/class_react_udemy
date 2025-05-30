
const getImage = async () => {
    try {
    //Llave de la API
	const apiKey = 'kAWenzHdSPfGUfd4F3LZT9Uy4esjlX7e';
    // Realiza la peticion
	const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    // Desestructura el json para que devuleva el valor de data 
	const { data } = await resp.json();
    // Desestructura el json para que devuleva el valor de url
	const { url } = data.images.original;
	
	// Mostrar imagen en la página
	// Creo la etiqueta img
	const img = document.createElement('img')
    // Le mando el valor de url al atributo src
	img.src = url
    // Agrega la imagen al body
	document.body.append(img)
    } catch (error) {
        console.log(error);
    }
}

getImage();
