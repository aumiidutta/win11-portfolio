// Update time in taskbar
function updateDateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const now = new Date();
    
    // Update time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
    
    // Update date
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}
setInterval(updateDateTime, 1000);
updateDateTime();

setInterval(updateTime, 1000);
updateTime();



// Notepad functionality
function openNotepad(id) {
    const notepad = document.getElementById(`notepad-${id}`);
    if (notepad) {
        notepad.style.display = 'block';
        // Center the notepad
        notepad.style.position = 'fixed';
        notepad.style.left = '50%';
        notepad.style.top = '50%';
        notepad.style.transform = 'translate(-50%, -50%)';
    } else {
        alert(`Notepad with ID "notepad-${id}" does not exist.`);
    }
}

function closeNotepad(id) {
    const notepad = document.getElementById(`notepad-${id}`);
    if (notepad) {
        notepad.style.display = 'none';
    }
}



//Video Player
/* 1. Open video popup */
function openVideo() {
    document.getElementById('videoPopup').style.display = 'flex';
}

/* 2. Close video popup */
function closeVideo() {
    const videoPopup = document.getElementById('videoPopup');
    const video = document.getElementById('popupVideo');
    video.pause(); // Pause the video when closing
    videoPopup.style.display = 'none';
}