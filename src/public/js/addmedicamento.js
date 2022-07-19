
function addMedicamento(){
    let i = 2;
    document.getElementById('add-new-medicamento').onclick = function () {
      let template = `
      <div class="form-group">
      <input type="text" name="medicamentos[nombre][${i}]" class="form-control" placeholder="Nombre del medicamento">
    </div>
    <div class="form-group">
      <input type="text" name="medicamentos[gramos][${i}]" class="form-control" placeholder="Gramos">
    </div>
    <div class="form-group">
      <input type="text" name="medicamentos[instrucciones][${i}]" class="form-control" placeholder="Instrucciones">
    </div>
      let container = document.getElementById('addPrescription');
      let div = document.createElement('div');
      div.innerHTML = template;
      container.appendChild(div);`;

    let container = document.getElementById('add-new-medicamento');
    let div = document.createElement('div');
    div.innerHTML = template;
    container.appendChild(div);
    i++;
}
}