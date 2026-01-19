// Barber selectie highlight
document.querySelectorAll('.barber-option').forEach(el => {
  el.addEventListener('click', () => {
    document.querySelectorAll('.barber-option').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
  });
});

// Formulier (nu alleen een melding - je kunt hier later echte logica toevoegen)
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const selectedBarber = document.querySelector('.barber-option.selected');
  const barberName = selectedBarber ? selectedBarber.querySelector('br').previousSibling.textContent.trim() : 'niemand';

  alert(`Afspraak is (nog) niet echt verstuurd.\n\nNaam: ${document.getElementById('fullname').value}\nKapper: ${barberName}\n\nDit is een demo! 😄`);
});