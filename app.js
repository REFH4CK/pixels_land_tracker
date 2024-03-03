let roninIcon = document.getElementById('ronin');

function copyAddress() {
    navigator.clipboard.writeText('0xd70e7713a2b21fbb525e2674aebfa7087a5d2d50')
    .then(() => {
      console.log('Texto copiado al portapapeles')
    })
    .catch(err => {
      console.error('Error al copiar al portapapeles:', err)
    })  
}

roninIcon.addEventListener('click', copyAddress);


// 0xd70e7713a2b21fbb525e2674aebfa7087a5d2d50