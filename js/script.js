/*function(){  
    var pesquisa = [
        {"nome":"Marcelo"},
        {"nome":"Lorena"}
    ];

    let tabela = document.getElementById('tabela')
    console.log('teste',tabela)

    var node = document.createElement("LI");  
    node.innerHTML =pesquisa[0].nome;
    tabela.appendChild(node)
       
})()
*/

function myFunction() {
    var input, filter, tr, td, i, txtValue;
    input = document.getElementById("busca");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabela");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }