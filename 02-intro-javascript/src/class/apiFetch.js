const apiKey = 'kAWenzHdSPfGUfd4F3LZT9Uy4esjlX7e';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
	.then(result => result.json())
    .then(({ data }) => {
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url;
        document.body.append(img);
    })
	.catch(console.warn);