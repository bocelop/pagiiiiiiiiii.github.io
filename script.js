function showReminder() {
    var reminder = document.getElementById('reminder');
    reminder.style.display = 'block';
    setTimeout(function() {
        reminder.style.display = 'none';
    }, 3000); // Hapus pesan setelah 3 detik
}

function showMessage(message) {
    alert(message);
}
