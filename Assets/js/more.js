const moreOption = document.getElementById('MoreOption');
const optionsList = document.getElementById('OptionsList');
const option = document.getElementById('Option');

moreOption.addEventListener('click', function() {
    const isDisplayed = optionsList.style.display === 'block';

    if (isDisplayed) {
        optionsList.style.display = 'none';
    } else {
        optionsList.style.display = 'block';
    }
});

option.addEventListener('click', function() {
    // Pindahkan pengguna ke halaman lain saat "Exit" diklik
    window.location.href = 'https://www.google.com'; // Ganti dengan URL halaman tujuan Anda
});