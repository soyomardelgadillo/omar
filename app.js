

const calcular=()=>{
    let total=0;
    let Salchicha=document.querySelector("#Salchicha");
    let Jamon=document.querySelector("#Jamon");
    let Chuleta=document.querySelector("#Chuleta")
    let Huevo=document.querySelector("#Huevo")
    let Veronica=document.querySelector("#Veronica")
    let Pachuqueña=document.querySelector("#Pachuqueña")
    let Texana=document.querySelector("#Texana")
    let Toluqueña=document.querySelector("#Toluqueña")
    let Cubana=document.querySelector("#Cubana")
    let Refrescos=document.querySelector("#Refre")
    let ServicioaDomicilio=document.querySelector("#ServiD")
    
    
    
    if (Salchicha.checked){
        total+=35;

        }
    if(Jamon.checked){
        total+=35;

        }
    if(Chuleta.checked){ 
        total+=35;
        }


    if(Huevo.checked){
        total+=35;

        }

    if(Veronica.checked){
        total+=45;
        }

    if(Pachuqueña.checked){
        total+=45;
        }
        
    if(Texana.checked){
        total+=45;
        }
    if(Toluqueña.checked){
        total+=45;
        }  
    if(Cubana.checked){
        total+=60;
        }     
    if(Refrescos.checked){
        total+=20;
    }
    if(ServicioaDomicilio.checked){
        total+=30;
        }
    
total=total.toFixed(2)
document.querySelector("#res").innerHTML="<h3>Precio Total $"+total+"MXN</h3>"
}