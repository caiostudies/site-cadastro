function Login() {

    var usuario = document.getElementById('name').value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementById('password').value;
    senha=senha.toLowerCase();
    if (usuario !="" && senha !="") {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'cadastro realizado',
            showConfirmButton: false,
            timer: 1500
          })

           
        

         if(usuario == "ll" || senha == "ll") { 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            
              
             }

             }
            }
        