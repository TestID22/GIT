document.addEventListener('DOMContentLoaded', function () {
});

function fallLetters() {
  var letters = document.querySelectorAll("#letterContainer span");

  letters.forEach(function (letter, index) {

    setTimeout(function () {
      letter.style.transform = "translateY(1400px)";
      letter.style.color = "orange";
    }, index * 100);
  });
}

function toggleText(id) {
  closeAllTabs();
  const textElement = document.getElementById(id);
  textElement.classList.toggle('hidden');
}


function closeAllTabs() {
  const tabs = document.querySelectorAll(".block_info:not(.hidden)");
  tabs.forEach(tab => tab.classList.add('hidden'));
}