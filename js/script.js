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

var list = [{name: 'Marcelo ',imgUrl:"",email: 'marcelo.beck22@exemple.com',phone:'(960)-861-1890' , location: 'Uberlandia-MG' },
            {name: 'Lorena ',email: 'lorena.beck22@exemple.com', phone:'(960)-861-1890' , location: 'São Paulo-SP' },
            {name: 'Thais ',email: 'thais.beck22@exemple.com', phone:'(960)-861-1890' , location: 'Rio de Janeiro-RJ'},
            {name: 'Maria ',email: 'maria.beck22@exemple.com', phone:'(960)-861-1890' , location: 'Belo Horizonte-MG' },
            {name: 'Maria ',email: 'maria.beck22@exemple.com', phone:'(960)-861-1890' , location: 'Belo Horizonte-MG' }
    ]

  function render(employeeList){
      var tableElement = document.getElementById("employees");
    

      employeeList.forEach(item=>{
          console.log(item.name)
          var row = document.createElement("tr");
          var tdName = document.createElement("td");
          var tdEmail = document.createElement("td");
          var tdPhone = document.createElement("td");
          var tdLocation = document.createElement("td");
          var imgUrl = document.createElement("img")
          imgUrl.src = 'https://picsum.photos/200 ';
          imgUrl.classList.add("image");

          
          

          tdName.innerHTML=item.name;
          tdEmail.innerHTML=item.email;
          tdPhone.innerHTML=item.phone;
          tdLocation.innerHTML=item.location;
          imgUrl.innerHTML=item.imgUrl
          
    

          row.appendChild(imgUrl)  
          row.appendChild(tdName)
          row.appendChild(tdEmail)
          row.appendChild(tdPhone)
          row.appendChild(tdLocation)
         
        
    

        tableElement.appendChild(row)
          
      })
  }     

  render(list)

    function filter(filter){
        console.log('Filter' , filter)
        if (filter ==='all')
        render(list)


        if (filter ==='deleted')
        render(list.filter(client =>client.deleted))


        if (filter ==='finished')
        render(list.filter(client => cliente.finished))

    }
  