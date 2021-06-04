



var selectedButton = 'todos';



var list = [{img:"../img/h5.jpg" , birthday:'06/09/1985' , name: 'Marcelo ' , email: 'marcelo.beck22@exemple.com'   , phone:'(960)-861-1890' , location: 'Uberlandia-MG' , finished:true ,deleted: false },
            {img:"../img/m1.jpeg", birthday:'06/09/1985' , name: 'Lorena ' ,email: 'lorena.beck22@exemple.com' , phone:'(960)-861-1890' , location: 'São Paulo-SP' , finished:true , deleted: false},
            {img:"../img/m3.jpeg", birthday:'06/09/1985' ,name: 'Thais ' , email: 'thais.beck22@exemple.com' , phone:'(960)-861-1890' , location: 'Rio de Janeiro-RJ', finished:true, deleted: false },
            {img:"../img/m2.jpeg", birthday:'06/09/1985' ,name: 'Maria ',  email: 'maria.beck22@exemple.com' , phone:'(960)-861-1890' , location: 'Belo Horizonte-MG' , finished:true , deleted: false },
            {img:"../img/h4.jpeg", birthday:'06/09/1985' ,name: 'Wesley', email: 'wesley.beck22@exemple.com' , phone:'(960)-861-1890' , location: 'Belo Horizonte-MG' , deleted: true }
    ]
    

  function render(employeeList){
      var tableElement = document.getElementById("employees");
      while (tableElement.hasChildNodes()){  
        tableElement.removeChild(tableElement.firstChild);
      }  


      employeeList.forEach(item=>{
          var row = document.createElement("tr");
          row.onclick = ()=>{
            window.localStorage.setItem('pessoa', JSON.stringify(item));
            window.location.href = '/pageUser/pageUser.html'
          }
          var tdName = document.createElement("td");
          var tdEmail = document.createElement("td");
          var tdPhone = document.createElement("td");
          var tdLocation = document.createElement("td");
          var imgUrl = document.createElement("img");
          var tdPassword = document.createElement("td");
          imgUrl.src = item.img;
          imgUrl.classList.add("image");
          var buttonTrash = document.createElement('button')
          buttonTrash.className = 'button fa fa-trash'
          var buttonFinished = document.createElement('button')
          buttonFinished.className = 'button fa fa-search'
          var buttonAll = document.createElement('button')
          buttonAll.className = 'button fa fa-home'
          

          tdName.innerHTML=item.name;
          tdEmail.innerHTML=item.email;
          tdPhone.innerHTML=item.phone;
          tdLocation.innerHTML=item.location;
          imgUrl.innerHTML=item.imgUrl;
          
          
          
      
         

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
          
               

          if (selectedButton != 'all'){     
          
            row.appendChild(buttonAll)
            
          }

          if (selectedButton != 'finished'){
            row.appendChild(buttonFinished)
          }

          if(selectedButton != 'deleted'){
            row.appendChild(buttonTrash)
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
    
        if (filter ==='finished') {
          selectedButton = 'finished'

          render(list.filter(client => client.finished))
        }
        
        
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
            var email = employees[i].email.toUpperCase()

            if (name.includes(value)) {
                employeeList.push(employees[i])
            }
            
           else if  (email.includes(value)) {
              employeeList.push(employees[i])
          }


        }

        return employeeList
   }

  
  // let pessoa = {
 //   Name:"Thais",
 // }
  //window.localStorage.setItem('pessoa', JSON.stringify(pessoa));
  


