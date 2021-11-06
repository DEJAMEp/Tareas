function getData(){
var name = document.getElementById("name").value;
        var lastName= document.getElementById("lastName").value;
        var eMail= document.getElementById("eMail").value;

        var datos = [name, lastName, eMail];

        sessionStorage.setItem("Nombre", name);
        sessionStorage.setItem("Apellido", lastName);
        sessionStorage.setItem("Correo", eMail);
        }
    
    
        document.getElementById("miBtn").addEventListener("click", function imprime(){
            /* var name = getElementById("name").value;
            var lastName= getElementById("lastName").value;
            var eMail= getElementById("eMail").value;
    
            var datos = [name, lastName, eMail];
    
            sessionStorage.setItem("Nombre", name);
            sessionStorage.setItem("Apellido", lastName);
            sessionStorage.setItem("Correo", eMail); */
    
            getData();
            document.getElementById("acaSaludo").innerHTML = "Gracias " + sessionStorage.getItem("Nombre")
            + " " + sessionStorage.getItem("Apellido") + " por contactarte con nosotros, nos comunicaremos a tu correo "
            + sessionStorage.getItem("Correo") + " a la brevedad"
    
    
    })
   
    
   /*  function createTable(){
        var escribe = document.getElementById("acaTabla").innerHTML =
        `<button type="button" id="sortByName">name ordered</button>` +
        `<table style="width:100%">
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Teléfono movil</th> 
                <th>Foto personal</th>
            </tr>
       

        `
       /* for(imprime();;){
        document.getElementById("acaTabla").innerHTML = escribe += `
           <tr>
                <td>${sessionStorage.getItem("Nombre")}</td>
                <td>${sessionStorage.getItem("Apellido")}</td>
                <td>${sessionStorage.getItem("Correo")}</td>
                
            </tr>
           `
    
        }
        
        escribe+= `
         </table>
        `
    }*/
    
        //var table = document.getElementById("acaTabla").innerHTML;
        //console.log(table);
       function addRow(){
           var 
       }
   