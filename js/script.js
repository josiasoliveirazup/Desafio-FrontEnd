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



/* var searchElementInput = document.getElementById('tabela')

tabela.addEventListener('input', ()=>{
  console.log(tabela.value)
})

*/

/*$("#removediv1").click(function(){
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

*/

var selectedButton = 'todos';

var list = [{name: 'Marcelo ',imgUrl:"",email: 'marcelo.beck22@exemple.com',phone:'(960)-861-1890' , location: 'Uberlandia-MG'},
            {name: 'Lorena ',email: 'lorena.beck22@exemple.com', phone:'(960)-861-1890' , location: 'São Paulo-SP' },
            {name: 'Thais ',email: 'thais.beck22@exemple.com', phone:'(960)-861-1890' , location: 'Rio de Janeiro-RJ'},
            {name: 'Maria ',email: 'maria.beck22@exemple.com', phone:'(960)-861-1890' , location: 'Belo Horizonte-MG' , finished:true },
            {name: 'Wesley ',email: 'wesley.beck22@exemple.com', phone:'(960)-861-1890' , location: 'Belo Horizonte-MG' , deleted: true }
    ]
    

  function render(employeeList){
      var tableElement = document.getElementById("employees");
      while (tableElement.hasChildNodes()) {  
        tableElement.removeChild(tableElement.firstChild);
      }  


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
          var buttonTrash = document.createElement('button')
          var buttonFinished = document.createElement('button')
          var buttonAll = document.createElement('button')
          
        
          
       

          
          tdName.innerHTML=item.name;
          tdEmail.innerHTML=item.email;
          tdPhone.innerHTML=item.phone;
          tdLocation.innerHTML=item.location;
          imgUrl.innerHTML=item.imgUrl
          buttonTrash.appendChild(document.createTextNode('\u00A0\Lixeira'))
          buttonFinished.appendChild(document.createTextNode(' \u00A0\Atendidos'))
          buttonAll.appendChild(document.createTextNode(' \u00A0\Todos'))
          buttonTrash.onclick =  function moveElement(){
            item.deleted = true;
            item.finished = false;
            render(list);        
        }

        buttonFinished.onclick = function moveElement(){
          item.deleted = false;
          item.finished = true;
          render(list);
        }
    

        
         
          

          row.appendChild(imgUrl)  
          row.appendChild(tdName)
          row.appendChild(tdEmail)
          row.appendChild(tdPhone)
          row.appendChild(tdLocation)
          row.appendChild(buttonTrash)
          row.appendChild(buttonFinished)

          if (selectedButton != 'all'){     
            row.appendChild(buttonAll)
          }
          
    
         
        
    

        tableElement.appendChild(row)
          
      })
  }     

  render(list)

    function filter(filter){
        console.log('Filter' , filter)
        if  (filter ==='all') {
          selectedButton = 'all'
          
          render(list)

        }
         
       
        if (filter ==='deleted') {
          selectedButton = 'deleted'

          render(list.filter(client =>client.deleted))
        }


        

    
        if (filter ==='finished') render(list.filter(client => client.finished))

    }
  

  $('#busca').on('keyup', function() {
        var value = $(this).val()
        console.log('Value:',value)
        var listFiltered = searchTable(value, list )

        render(listFiltered)

    })


   function searchTable(value, employees ){
        var employeeList = []

        for (var i = 0; i < employees.length; i++){
            value = value.toUpperCase()
            var name = employees[i].name.toUpperCase()

            if (name.includes(value)) {
                employeeList.push(employees[i])

            }
        }

        return employeeList
   }

    
      
   



   

        