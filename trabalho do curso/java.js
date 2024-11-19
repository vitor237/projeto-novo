document.getElementById('whatsappButton').addEventListener('click', function() {
    window.location.href = "https://wa.me/5561994388894";
  });
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    alert(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
  });
  
 
