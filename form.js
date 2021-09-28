function checkNumDocumento(valor, tipo) {
    if (tipo == "TI") {
        return validari(valor);
    }
    if (tipo == "CC") {
        return validari(valor);
    }

    if (tipo == "RC") {
        return validari(valor);
    }

}

function validari(valor) {
    const ptr = new RegExp('[^0-9]+');
    if (valor.length >= 8 && valor.length <= 10) {
        if (!ptr.test(valor)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function checkCorreo(valor) {
    if (/\w+([-+.']\w+)*@\w+([-.]\w+)*\./.test(valor)) {
        return true;
    } else {
        return false;
    }
}

function checkContrasena(valor) {
    const ptr1 = new RegExp('[A-ZÑ]+');
    const ptr2 = new RegExp('[a-zñ]+');
    const ptr3 = new RegExp('[0-9]+');

    if ((valor.length >= 8) && ptr1.test(valor) && ptr2.test(valor) && ptr3.test(valor)) {
        return true;
    } else {
        return false;
    }
}

module.exports={checkNumDocumento,checkCorreo,checkContrasena}