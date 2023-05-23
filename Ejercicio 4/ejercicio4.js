function obtenerCodigoSesion() {
    var url = document.getElementById("urlSesion").value;
    var codigo = url.split("/").pop().replace(/-/g, "");
    document.getElementById("codigoSesion").textContent = codigo;
}