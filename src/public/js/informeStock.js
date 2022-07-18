
const table = document.getElementById('table');
const fechaVencimiento = document.getElementsByName('fechaVencimiento')[0];

function dateFormat(date, flag) {
    var dd = flag ? date.getDate() : date.getDate() + 1;
    var mm = date.getMonth() + 1;
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    return flag ? date.getFullYear() + '-' + mm + '-' + dd :
        dd + '/' + mm + '/' + date.getFullYear();
}

function setValueFecha() {
    let auxDate = new Date();
    fechaVencimiento.value = dateFormat(auxDate, true);
}

function setFormulario(){
    setValueFecha();
    console.log(fechaVencimiento.value);
}

function showValue(){
    console.log(fechaVencimiento.value);
}