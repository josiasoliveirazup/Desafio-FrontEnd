//function(){  
  /*  var pesquisa = [
        {"nome":"Marcelo", "endereco":"BH" , "img":"img/h5.jpg"},
        {"nome":"Lorena" , "endereco": "SP"}
    ];

    let tabela = document.getElementById('tabela')
    console.log('teste',tabela)
    var user=pesquisa[0]
    var node = document.createElement("td");  
    var img = document.createElement("img"); 
    var nome = document.createElement("td");
    var endereco = document.createElement("td"); 
    img.src=user.img;
    img.classList.add("imagem");
    nome.innerHTML=user.nome;
    endereco.innerHTML=user.endereco;

    node.appendChild(img)
    node.appendChild(nome)
    node.appendChild(endereco)

    tabela.appendChild(node)
       */
//})()



/* window.onload=function(){

var filtro = document.getElementById('busca');
var tabela = document.getElementById('tabela');
filtro.onkeyup = function() {
    var nomeFiltro = filtro.value;
    for (var i = 1; i < tabela.rows.length; i++) {
        var conteudoCelula = tabela.rows[i].cells[0].innerText;
        var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
        tabela.rows[i].style.display = corresponde ? '' : 'none';
    }
}
}
*/

$('#busca').keyup(function() {
    var nomeFiltro = $(this).val().toLowerCase();
    console.log(nomeFiltro);
    $('tbody').find('tr').each(function() {
        var conteudoCelula = $(this).find('td').text();
        console.log(conteudoCelula);
        var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
        $(this).css('display', corresponde ? '' : 'none');
    });
});


/* var searchElementInput = document.getElementById('tabela')

tabela.addEventListener('input', ()=>{
  console.log(tabela.value)
})

*/

$("#removediv1").click(function(){
    $('#user1').empty("");
});
$("#removediv2").click(function(){
    $('#user2').empty("");
});
$("#removediv3").click(function(){
    $('#user3').empty("");
});
$("#removediv4").click(function(){
    $('#user4').empty("");
});


$(document).ready(
    function() {
        $('.fa-trash').click(
            function() {
                swal({
                    title : "Você tem certeza que deseja excluir este registro ?",
                    text : "Você não poderá recuperar este registro após excluir !",
                    type : "warning",
                    showCancelButton : true,
                    confirmButtonColor : "#DD6B55",
                    confirmButtonText : "Sim",
                    closeOnConfirm : false
                },
            function() {
                swal("Excluído!",
                    "Este registro foi excluído.",
                    "success");
                });
            });
    });