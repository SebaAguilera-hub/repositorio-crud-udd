function validarForm(){
    let item = document.getElementById("item-input").value;

    if(item == ""){
        alert("ingrese los datos!")
        return false
    }
    return true
}

function addData(){
    if(validarForm() == true){
        let item = document.getElementById("item-input").value;
        let listaItem;

        if(localStorage.getItem('listaItem') == null){
            listaItem = [];
        }else{
            //toma un texto json y lo convierte a objeto js
            listaItem = JSON.parse(localStorage.getItem('listaItem'));
        }
        listaItem.push({
            item: item
        });
        //transforma un objeto js a una cadena de texto json
        localStorage.setItem("listaItem", JSON.stringify(listaItem))
        //mostrar data
        showData();
        limpiarData();
    }
}

function showData(){
    let listaItem;
    
    if(localStorage.getItem("listaItem") == null){
         listaItem = [];
    } else{
        listaItem = JSON.parse(localStorage.getItem("listaItem"));
    }

    let html = "";
    listaItem.array.forEach(function(element, index){
        html += "<tr>";
        html += "<td>" + element.item + "</td>";
        html += '<td><button onclick="updateData(' + index + ')" class="btn btn-warning">Editar Dato</button> <button onclick="deleteData(' + index + ')" class="btn btn-danger" id="btnDelete">Eliminar Dato</button></td>';
        html += "</tr>";
    });

    document.querySelector('#tableData tbody').innerHTML = html;
}
//crear
document.onload = showData();

function deleteData(index){
   let listItem;
}