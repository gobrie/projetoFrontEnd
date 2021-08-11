$(document).ready(function(){
  $('#loginAluno').submit(function(evento){
    var usuario = $('inputUsuario').val()
    var senha = $('inputSenha').val()
    if(usuario == 'root' && senha == '1234'){
      $('#mensagem').addClass('alert-success alert-dismissible fade show')
      $('#mensagem').removeClass('alert')
      $('#mensagem').text('Usuário Logado').show().fadeOut(3000)
    } else {
      $('#mensagem').addClass('alert alert-warning alert-dismissible fade show')
      $('#mensagem').text('Usuário ou senha incorretos!').show().fadeOut(3000).event.preventdefault () //bloqueia o evento de submit
    }
  })
})