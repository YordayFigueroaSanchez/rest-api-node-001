const guardarArchivo = async (files, nombreArchivo, tipoArchivo) => {

    const archivo = files[nombreArchivo];
    const resp = {isOk: false, error: null, nuevoNombre: null};
    console.log(archivo);

    if (archivo.mimetype == tipoArchivo) {
        
        resp.isOk = true;
        return resp;
    } else {
        
        resp.error = "formato del archivo incorrecto";
        return resp;
    }

}

module.exports = guardarArchivo;