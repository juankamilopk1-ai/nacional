document.getElementById("mejor").onclick = function() {
  const texto = document.getElementById("textoOculto");
  texto.style.display = (texto.style.display === "none") ? "block" : "none";
};

document.getElementById("oscuro").onclick= function() { 
    document.body.classList.toggle("oscuro");


};