/*
let ejecutarCodigo = () => {
    alert('Hola, mundo!')
}
ejecutarCodigo()
*/

const titulo1 = document.querySelector("#titulo1")
titulo1.textContent = "Titulo de fotos"

const text_muted = document.querySelector(".text-muted")
text_muted.textContent = '<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>'

const p = document.querySelectorAll("div.btn-group button")
p.forEach(element => {
    element.className = "d-none";
});
/*
let x = [{ url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'camino' }, { url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'energia' }, { url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'papá' }];
const svgs = document.querySelectorAll("svg");
for (let index = 1; index < svgs.length; index++) {
    let img = document.createElement("img");
    img.src = x[index].url
    img.alt = x[index].alt
    svgs.item(index).replaceWith(img)    
}*/