//No factura
 
document.querySelector('.NoC').addEventListener('keyup',(event)=>{    
    document.querySelector('#NoFolio').innerHTML= document.querySelector('.NoC').value;
})


//Nombre
document.querySelector('.NombreC').addEventListener('keyup',(event)=>{
    document.querySelector('#Nombre').innerHTML= document.querySelector('.NombreC').value;
})
//Telefono
document.querySelector('.TelClienteC').addEventListener('keyup',(event)=>{
    document.querySelector('#Telefono').innerHTML= document.querySelector('.TelClienteC').value;
})
//fecha
document.querySelector('.FechaC').addEventListener('keyup',(event)=>{
    document.querySelector('#Fecha').innerHTML= document.querySelector('.FechaC').value;
})
//Adelanto
document.getElementById('inputAdelanto').addEventListener('keyup',(event)=>{
    let adel = event.currentTarget.value;    
    let total = document.querySelector('.Total').innerHTML;
    total=total-adel;
    console.log(adel+total);
    document.querySelector('.Total').innerHTML=total;
    document.querySelector('.Adelanto').innerHTML=adel;

})
//Contenido
document.querySelector('.botonAdd').addEventListener('click',(event)=>{
    var cantidad=document.querySelector('.CantidadC').value;
    var descripcion =document.querySelector('.Descripcion').value;
    var Precio = document.querySelector('.Precio').value;
    var Importe = parseFloat(Precio)*parseInt(cantidad);
    var tabla = document.querySelector('.Contenido table');
    var subT = document.querySelector('.Subtotal');   
    var Total = document.querySelector('.Total');
    let adel = document.querySelector('.Adelanto').innerHTML;
    var st=0;    
    var To=0;
    
    var cadena = tabla.innerHTML;
    cadena+='<tr>'+
            '<td>'+cantidad+'</td>'+
            '<td>'+descripcion+'</td>'+
            '<td>'+Precio+'</td>'+
            '<td>'+Importe+'</td>'+
            '</tr>';
    tabla.innerHTML=cadena;
    var contador =0;
    for(hijo of tabla.children){
        if(contador!=0){
           //var valor = parseFloat(hijo[0].children[3].innerHTML);
           var objtA = hijo.children[0];
           var objtB= objtA.children[3];
           var valor = parseFloat(objtB.innerHTML);
           
           st+=valor;
           
        } 
        contador++;       
    }
    
    To=st-adel;

    subT.innerHTML=st;    
    Total.innerHTML=To;


    document.querySelector('.CantidadC').value='';
    document.querySelector('.Descripcion').value='';
    document.querySelector('.Precio').value='';
})

//Limpiar
document.querySelector('.Eliminar').addEventListener('click',()=>{
    document.querySelector('.Contenido table').innerHTML='<tr>'+
            '<th id="Cantidad">Cantidad</th>'+
            '<th id="Descripcion">Descripcion</th>'+
            '<th id="Precio">Precio</th>'+
            '<th id="Importe">Importe</th>'+
        '</tr>  ';
})

//Telefono takeria
document.querySelector('.TelefonoC').addEventListener('keyup',(event)=>{
    document.querySelector('#TelefonoP').innerHTML= document.querySelector('.TelefonoC').value;
})
//Telefono takeria
document.querySelector('.DireccionC').addEventListener('keyup',(event)=>{
    document.querySelector('#DireccionP').innerHTML= document.querySelector('.DireccionC').value;
})

//IMprimir
document.querySelector('.botonImprimir').addEventListener('click',()=>{
    
   var objeto=document.querySelector('.ContenedorHoja'); 
   var controles=document.querySelector('.Controles');
   controles.classList.add('OFF');
   window.print();
   controles.classList.remove('OFF');

   //Crear cookie
   let noFolio=parseInt(document.querySelector('#NoFolio').innerHTML);
   noFolio++;
   document.cookie='noFolio='+noFolio;
      
})

//Navegar entre pestanas
window.addEventListener('load',()=>{
    var listaPestana = document.querySelectorAll('.Pestana');
    for(pestana of listaPestana){
        pestana.addEventListener('click',CambiarPestana);
    }
})
 function CambiarPestana(){
     let listaPestana = document.querySelectorAll('.Pestana');
     let id = this.id;
     let listaSeparadores = document.querySelectorAll('.Separador');
     id=id.substring(1,id.length);
     for(pestana of listaPestana){
         pestana.classList.remove('PtON');
     }
     for(separador of listaSeparadores){
         separador.classList.remove('ON');
     }
     document.getElementById(id).classList.add('ON')
     this.classList.add('PtON');

 }

 