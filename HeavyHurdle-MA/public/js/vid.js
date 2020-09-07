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