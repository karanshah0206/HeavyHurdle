// Show/Hide Admin Controls
if (!admin || admin == "false") {
    var onlyAdmin = document.getElementsByClassName('admin-only');
    for (var i = 0; i < onlyAdmin.length; i++) {
        onlyAdmin[i].classList.add('hidden');
    }
}
if (admin == "true") {
    var noAdmin = document.getElementsByClassName('no-admin');
    for (var i = 0; i < noAdmin.length; i++) {
        noAdmin[i].classList.add('hidden');
    }
}

// Control List Toggle
document.getElementById('allControl').addEventListener('click', () => {
    document.getElementById('listControls').classList.toggle('hidden');
    document.getElementById('allControl').classList.toggle('navbar-drop');
    document.getElementById('allControl').classList.toggle('navbar-dropped');
});
document.getElementById('listControls').addEventListener('click', () => {
    document.getElementById('listControls').classList.add('hidden');
    document.getElementById('allControl').classList.remove('navbar-dropped');
    document.getElementById('allControl').classList.add('navbar-drop');
});

// Slider
document.getElementById('toggleChat').addEventListener('click', () => {
    if (document.getElementById('chatBar').classList.contains('slider-left-shown')) {
        document.getElementById('chatBar').classList.remove('slider-left-shown');
    }
    else {
        if (document.getElementById('userBar').classList.contains('slider-left-shown')) {
            document.getElementById('userBar').classList.remove('slider-left-shown');
        }
        document.getElementById('chatBar').classList.add('slider-left-shown');
    }
});
document.getElementById('chatBarClose').addEventListener('click', () => {
    document.getElementById('chatBar').classList.remove('slider-left-shown');
});
document.getElementById('toggleUser').addEventListener('click', () => {
    if (document.getElementById('userBar').classList.contains('slider-left-shown')) {
        document.getElementById('userBar').classList.remove('slider-left-shown');
    }
    else {
        if (document.getElementById('chatBar').classList.contains('slider-left-shown')) {
            document.getElementById('chatBar').classList.remove('slider-left-shown');
        }
        document.getElementById('userBar').classList.add('slider-left-shown');
    }
});
document.getElementById('userBarClose').addEventListener('click', () => {
    document.getElementById('userBar').classList.remove('slider-left-shown');
});

// Change Mode
document.getElementById('changeMode').addEventListener('click', () => {
    if (presenter) {
        alertify.error('The Presenter Can Only View Spotlight Mode.');
    } else {
        if (document.getElementById('remoteVid').classList.contains('presentation')) {
            document.getElementById('remoteVid').classList.remove('presentation');
            document.getElementById('present').classList.add('hidden');
            document.getElementById('remoteVid').classList.add('discussion');
            document.getElementById('changeMode').innerHTML = '<i class="fas fa-object-group"></i> Show Spotlight Layout';
        }
        else {
            document.getElementById('remoteVid').classList.remove('discussion');
            document.getElementById('remoteVid').classList.add('presentation');
            document.getElementById('present').classList.remove('hidden');
            document.getElementById('changeMode').innerHTML = '<i class="fas fa-object-group"></i> Show Tile Layout';
        }
    }
});