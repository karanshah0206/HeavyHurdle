// Video Frames
function createVid(user) {
    var newVid = document.createElement('div');
    newVid.id = user.id + '-remVid';
    newVid.classList.add('remoteContainer');
    document.getElementById('remoteVid').appendChild(newVid);
    var newVidName = document.createElement('div');
    newVidName.id = user.id + '-remName';
    newVidName.innerText = user.name;
    newVidName.classList.add('remoteName');
    document.getElementById(user.id + '-remVid').appendChild(newVidName);
    var newVidStatus = document.createElement('div');
    newVidStatus.classList.add('remoteStatus');
    newVidStatus.innerHTML = "<i id='"+user.id+"-remMute' class='fas fa-microphone-slash hidden'></i><i id='"+user.id+"-remBlind' class='fas fa-video-slash hidden'></i>";
    document.getElementById(user.id + '-remVid').appendChild(newVidStatus);
}

function removeVid(user) {
    document.getElementById(user + '-remVid').remove();
}

// Mute Toggler
function muteWorker() {
    if (document.getElementById('micControl').classList.contains('fa-microphone')) {
        toggleMute(true);
        document.getElementById('micControl').classList.remove('fa-microphone');
        document.getElementById('micControl').classList.add('fa-microphone-slash');
        document.getElementById('you-mute').classList.remove('invisible');
    } else {
        toggleMute(false);
        document.getElementById('micControl').classList.remove('fa-microphone-slash');
        document.getElementById('micControl').classList.add('fa-microphone');
        document.getElementById('you-mute').classList.add('invisible');
    }
}
function muteUI(data) {
    if (data.isMute == true) {
        document.getElementById(`${data.id}-remMute`).classList.remove('hidden');
        document.getElementById(`${data.id}-mute`).classList.remove('invisible');
    } else {
        document.getElementById(`${data.id}-remMute`).classList.add('hidden');
        document.getElementById(`${data.id}-mute`).classList.add('invisible');
    }
}