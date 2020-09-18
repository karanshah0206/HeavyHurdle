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
        document.getElementById('you-remMute').classList.remove('hidden');
    } else {
        toggleMute(false);
        document.getElementById('micControl').classList.remove('fa-microphone-slash');
        document.getElementById('micControl').classList.add('fa-microphone');
        document.getElementById('you-mute').classList.add('invisible');
        document.getElementById('you-remMute').classList.add('hidden');
    }
}

function muteChecker() {
    if (document.getElementById('micControl').classList.contains('fa-microphone')) {
        toggleMute(false);
    } else {
        toggleMute(true);
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

// Blind Toggler
function blindWorker() {
    if (document.getElementById('vidControl').classList.contains('fa-video')) {
        toggleBlind(true);
        document.getElementById('vidControl').classList.remove('fa-video');
        document.getElementById('vidControl').classList.add('fa-video-slash');
        document.getElementById('you-video').classList.remove('invisible');
        document.getElementById('you-remBlind').classList.remove('hidden');
    } else {
        toggleBlind(false);
        document.getElementById('vidControl').classList.remove('fa-video-slash');
        document.getElementById('vidControl').classList.add('fa-video');
        document.getElementById('you-video').classList.add('invisible');
        document.getElementById('you-remBlind').classList.add('hidden');
    }
}

function blindChecker() {
    if (document.getElementById('vidControl').classList.contains('fa-video')) {
        toggleBlind(false);
    } else {
        toggleBlind(true);
    }
}

function blindUI(data) {
    if (data.isBlind == true) {
        document.getElementById(`${data.id}-remBlind`).classList.remove('hidden');
        document.getElementById(`${data.id}-video`).classList.remove('invisible');
    } else {
        document.getElementById(`${data.id}-remBlind`).classList.add('hidden');
        document.getElementById(`${data.id}-video`).classList.add('invisible');
    }
}

// Add Agora Video
function addAgoraVideo(sId, aId) {
    setTimeout(() => {
        if (document.getElementById(aId)) {
            document.getElementById(sId + "-remVid").appendChild(document.getElementById(aId));
        } else {
        setAgoraTimeout(sId, aId);
        }}, 2000);
}

function setAgoraTimeout(sId, aId) {
    setTimeout(addAgoraVideo(sId, aId), 2000);
}