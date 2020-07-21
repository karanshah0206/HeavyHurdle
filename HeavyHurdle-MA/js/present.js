var title = document.getElementById('headTitle');
var head = document.getElementById('headTitle');
var frame = document.getElementById('presentFrame');
frame.src = '';

// Only Admin Controls
if (admin) {
    document.getElementById('headClose').disabled = false;
}

// Listeners
document.getElementById('toggleNote').addEventListener('click', () => {
    if (frameFree()) {
        setNotepad();
        presenter = true;
    }
    else {
        alertify.error('Another Presentation Running.');
    }
});

// Actions
function frameFree () {
    if (frame.src=='' || !frame.src || frame.src == location.href) {
        return true;
    }
    else if (admin || presenter) {
        return true;
    }
    else {
        return false;
    }
}

function setNotepad () {
    frame.src = 'A:/Personal%20Files/Codes%20and%20Tech/Web%20Projects/Firebase/Learning-Firebase/codemirror.html#-' + room + 'Notepad';
    console.log(frame.src);
    head.innerText = 'Shared Notepad';
    alertify.success('You Are Now Presenter.');
}