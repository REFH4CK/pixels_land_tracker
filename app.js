let roninIcon = document.getElementById('ronin');
let ad = document.querySelector('.ad');
let btnStarted = document.querySelector('.btn');

function hideAd() {
  ad.classList.remove('show_ad');
}

function copyAddress() {
    navigator.clipboard.writeText('0xd70e7713a2b21fbb525e2674aebfa7087a5d2d50')
    .then(() => {
      console.log('Texto copiado al portapapeles')
      ad.classList.add('show_ad');
      setTimeout(hideAd, 2000);
    })
    .catch(err => {
      console.error('Error al copiar al portapapeles:', err)
    })  
}

roninIcon.addEventListener('click', copyAddress);

btnStarted.addEventListener('click', ()=>{
   window.location.href = "https://refh4ck.github.io/pixels_land_tracker/src/tracker/tracker.html";
});