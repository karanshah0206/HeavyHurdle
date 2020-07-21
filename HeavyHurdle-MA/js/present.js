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
        setNotepad();
        addPresenter();
    }
    else {
        alertify.error('Another Presentation Running.');
    }
});
document.getElementById('toggleCode').addEventListener('click', () => {
    if (frameFree()) {
        setCode();
        addPresenter();
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
        console.log(admin);
        return false;
    }
}

function setNotepad () {
    // frame.src = 'A:/Personal Files/Codes and Tech/Corporate Projects/HeavyHurdle/HeavyHurdle/HeavyHurdle-MA/notepad/codemirror.html#-' + room + 'Notepad';
    frame.src = 'A:/Personal Files/Codes and Tech/Web Projects/Firebase/Learning-Firebase/codemirror.html#-' + room + 'Notepad';
    head.innerText = 'Shared Notepad';
    document.getElementById('presentHeader').classList.remove('hidden');
    frame.classList.remove('hidden');
    speaker.classList.add('hidden');
}
function setCode () {
    // frame.src = 'A:/Personal Files/Codes and Tech/Corporate Projects/HeavyHurdle/HeavyHurdle/HeavyHurdle-MA/frames/acecode.html#-' + room + 'Code';
    frame.src = 'A:/Personal Files/Codes and Tech/Web Projects/Firebase/Learning-Firebase/acecode.html#-' + room + 'Code';
    head.innerText = 'Code Editor';
    document.getElementById('presentHeader').classList.remove('hidden');
    frame.classList.remove('hidden');
    speaker.classList.add('hidden');
}