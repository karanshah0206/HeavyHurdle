var title = document.getElementById('headTitle');
var head = document.getElementById('headTitle');
var frame = document.getElementById('presentFrame');
var speaker = document.getElementById('mainSpeaker');

// Only Admin Controls
if (admin) {
    document.getElementById('headClose').classList.remove('btn-disabled');
}

// Listeners
document.getElementById('headClose').addEventListener('click', () => {
    if (presenter) {
        removePresenter();
    }
    else if (admin) {
        alertify.message('Admin Has Closed Presentation.');
        frame.src = '';
        head.innerText = 'Presentation';
        document.getElementById('presentHeader').classList.add('hidden');
        frame.classList.add('hidden');
        speaker.classList.remove('hidden');
    }
    else {
        alertify.error('Only Admin/Presenter Can Close Presentation.');
    }
});
document.getElementById('toggleNote').addEventListener('click', () => {
    if (frameFree()) {
        if (!presenter) {
            addPresenter();
        }
        setNotepad();
    }
    else {
        alertify.error('Another Presentation Running.');
    }
});
document.getElementById('toggleCode').addEventListener('click', () => {
    if (frameFree()) {
        if (!presenter) {
            addPresenter();
        }
        setCode();
    }
    else {
        alertify.error('Another Presentation Running.');
    }
});
document.getElementById('toggleBoard').addEventListener('click', () => {
    if (frameFree()) {
        if (!presenter) {
            addPresenter();
        }
        setBoard();
    }
    else {
        alertify.error('Another Presentation Running.');
    }
});
document.getElementById('toggleYouTube').addEventListener('click', () => {
    if (frameFree()) {
        if (!presenter) {
            addPresenter();
        }
        setYoutube();
    }
    else {
        alertify.error('Another Presentation Running.');
    }
});
document.getElementById('toggleViewer').addEventListener('click', () => {
    if (frameFree()) {
        if (!presenter) {
            addPresenter();
        }
        setViewier();
    }
     else {
         alertify.error('Another Presentation Running.');
     }
});

// Actions
function addPresenter () {
    presenter = true;
    alertify.success('You Are Now Presenter.');
    document.getElementById('headClose').classList.remove('btn-disabled');
}
function removePresenter () {
    presenter = false;
    alertify.message('You Are No More The Presenter.');
    frame.src = '';
    head.innerText = 'Presentation';
    if (!admin) {
        document.getElementById('headClose').classList.add('btn-disabled');
    }
    document.getElementById('presentHeader').classList.add('hidden');
    frame.classList.add('hidden');
    speaker.classList.remove('hidden');
}

function frameFree () {
    if (frame.classList.contains('hidden')) {
        return true;
    }
    else if (frame.src=='' || !frame.src || frame.src == location.href) {
        return true;
    }
    else {
        if (admin || presenter) {
            return true;
        }
        return false;
    }
}

function setNotepad () {
    // frame.src = '../frames/notepad/codemirror.html#-' + room + 'Notepad';
    frame.src = 'A:/Personal Files/Codes and Tech/Web Projects/Firebase/Learning-Firebase/codemirror.html#-' + room + 'Notepad';
    head.innerText = 'Shared Notepad';
    speaker.classList.add('hidden');
    document.getElementById('presentHeader').classList.remove('hidden');
    frame.classList.remove('hidden');
}
function setCode () {
    // frame.src = '../frames/code/acecode.html#-' + room + 'Code';
    frame.src = 'A:/Personal Files/Codes and Tech/Web Projects/Firebase/Learning-Firebase/acecode.html#-' + room + 'Code';
    head.innerText = 'Code Editor';
    speaker.classList.add('hidden');
    document.getElementById('presentHeader').classList.remove('hidden');
    frame.classList.remove('hidden');
}
function setBoard () {
    frame.src = 'https://www.whiteboard.team/app/board/' + room + 'HHWhiteboard' + '?clientid=6dbdff4f22c0251ef3245b4a313e2b21';
    head.innerText = 'Whiteboard';
    speaker.classList.add('hidden');
    document.getElementById('presentHeader').classList.remove('hidden');
    frame.classList.remove('hidden');
}
function setYoutube () {
    // frame.src = '../frames/player/index.html';
    frame.src = 'https://www.youtube.com/embed/r_hYR53r61M';
    head.innerText = 'YouTube Player';
    speaker.classList.add('hidden');
    document.getElementById('presentHeader').classList.remove('hidden');
    frame.classList.remove('hidden');
}
function setViewier() {
    // frame.src = '../frames/viewer/docviewer.html';
    frame.src = 'https://www.youtube.com/embed/r_hYR53r61M';
    head.innerText = 'Document Viewier';
    speaker.classList.add('hidden');
    document.getElementById('presentHeader').classList.remove('hidden');
    frame.classList.remove('hidden');
}