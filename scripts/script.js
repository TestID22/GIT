document.addEventListener('DOMContentLoaded', function() {
    var registrationButton = document.getElementById('registrationButton');
    var registrationForm = document.getElementById('registrationForm');
  
    registrationButton.addEventListener('click', function() {
      registrationForm.classList.toggle('hidden');
    });
  });
  
  function fallLetters() {
    var letters = document.querySelectorAll("#letterContainer span");

    letters.forEach(function(letter, index) {
        
        setTimeout(function() {
            letter.style.transform = "translateY(1400px)";
            letter.style.color = "orange";
        }, index * 100); 
    });
}
