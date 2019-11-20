//Fecha
document.querySelector('.FechaC').addEventListener('keyup',(event)=>{
    document.querySelector('.fecha').innerHTML= document.querySelector('.FechaC').value;
})
//Contenido
document.querySelector('.ContenidoC').addEventListener('keyup',(event)=>{
    
    //document.querySelector('.ContenidoPag p').innerHTML= "<pre>"+event.target.value+"</pre>";
    let valor=event.currentTarget.value;
    document.querySelector('.ContenidoPag').innerHTML= valor;
    
})
//Telefono
document.querySelector('.TelefonoC').addEventListener('keyup',(event)=>{
    document.querySelector('.telefono').innerHTML= document.querySelector('.TelefonoC').value;
})
//Direccion
document.querySelector('.DireccionC').addEventListener('keyup',(event)=>{
    document.querySelector('.Direccion').innerHTML= document.querySelector('.DireccionC').value;
})

document.querySelector('.botonImprimir').addEventListener('click',()=>{
    
    var objeto=document.querySelector('.ContenedorHoja'); 
   
   //obtenemos el objeto a imprimir
   var ventana=window.open('','_blank');
        
          ventana.document.write(objeto.innerHTML);  //imprimimos el HTML del objeto en la nueva ventana
         //cerramos la ventana
      
})

