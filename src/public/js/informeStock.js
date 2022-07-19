
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

function setFormulario() {
    setValueFecha();
    console.log(fechaVencimiento.value);
}

function createInforme(item) {
    const ctx = document.getElementById('myChart').getContext('2d');
    let lote = JSON.parse(item);
    const tituloInforme = document.getElementById('tituloInforme');
    tituloInforme.innerText = "Informe generado para: " + lote.nombre;
    console.log("lote", lote);
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Disponibles', 'Entregados', 'Vencidos'],
            datasets: [{
                label: 'Cantidad de Medicamentos',
                data: [lote.cantidadDisponible, lote.cantidadEntregada, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
