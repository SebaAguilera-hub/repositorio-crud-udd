function validarForm(){

    let id = document.getElementById("id-input").value;
    let stock = document.getElementById("stock-input").value;
    let item = document.getElementById("item-input").value;

    if(item == "" || id == "" || stock == ""){
        alert("ingrese los datos!")
        return false
    }
    return true
}

function addData(){
    if(validarForm() == true){
        let id = document.getElementById("id-input").value;
        let stock = document.getElementById("stock-input").value;
        let item = document.getElementById("item-input").value;

        let listaItem;

        if(localStorage.getItem('listaItem') == null){
            listaItem = [];
        }else{
            //toma un texto json y lo convierte a objeto js
            listaItem = JSON.parse(localStorage.getItem('listaItem'));
        }
        listaItem.push({
            id: id,
            item: item,
            stock: stock
        });

        //transforma un objeto js a una cadena de texto json
        localStorage.setItem("listaItem", JSON.stringify(listaItem))
        //mostrar data
        showData();
        //limpia el input para dejarlo sin texto 
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
    listaItem.forEach(function(element, index){
        html += "<tr>";
        html += "<td>" + element.id + "</td>"
        html += "<td>" + element.item + "</td>";
        html += "<td>" + element.stock + "</td>";
        html += '<td><button onclick="updateData(' + index + ')" class="opcion btn btn-warning">Editar Dato</button> <button onclick="deleteData(' + index + ')" class="opcion btn btn-danger" id="btnDelete">Eliminar Dato</button></td>';
        html += "</tr>";

    });

    document.querySelector('#dataTable tbody').innerHTML = html;

}

document.onload = showData();



//eliminar
 function deleteData(index){
    let listaItem;
    if(localStorage.getItem("listaItem") == null){
       listaItem = [];
    }else{
        listaItem = JSON.parse(localStorage.getItem("listaItem"));
    }
    listaItem.splice(index, 1);
    localStorage.setItem("listaItem", JSON.stringify(listaItem));
    showData();
}

//editar
function updateData(index){
  
    document.getElementById("btnAdd").style.display = "none";
    document.getElementById("btnUpdate", btnAdd).style.display = "block";

    let listaItem;
    if(localStorage.getItem("listaItem") == null){
        listaItem = [];
    }else{
         listaItem = JSON.parse(localStorage.getItem("listaItem"));
         document.querySelector(".block").style.display = "block";
    }
    
    document.getElementById("id-input").value = listaItem[index].id;
    document.getElementById("item-input").value = listaItem[index].item;
    document.getElementById("stock-input").value = listaItem[index].stock;

    document.querySelector("#btnUpdate").onclick = function(){
        if(validarForm()==true){
          listaItem[index].id = document.getElementById("id-input").value;
          listaItem[index].item = document.getElementById("item-input").value;
          listaItem[index].stock = document.getElementById("stock-input").value;

          localStorage.setItem("listaItem", JSON.stringify(listaItem))

          showData();
          limpiarData()
          document.querySelector(".block").style.display = "none";
          document.getElementById("btnAdd").style.display = "block";
          document.getElementById("btnUpdate", btnAdd).style.display = "none";
        }
    }

}

function limpiarData(){
    document.getElementById("id-input").value = "";
    document.getElementById("item-input").value = "";
    document.getElementById("stock-input").value = "";
}

