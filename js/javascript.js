
        
        function Exibindo() 
        {  
          document.images["slide"].src=eval("img"+contador);
          document.getElementById("v"+contador).checked=true;
              
          if (contador<3)
            contador++; /*contador=contador+1;*/
          else
            contador=1;
        }
            
         function Muda(x)
        {
          clearInterval(exibir);//interrompe o que está rodando no setInterval
          contador=x;
          exibir=setInterval("Exibindo()",tempo); //recomeçar o looping
        }
