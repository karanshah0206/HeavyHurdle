// Control List Toggle
document.getElementById('allControl').addEventListener('click', () => {
    document.getElementById('listControls').classList.toggle('hidden');
});
document.getElementById('listControls').addEventListener('click', () => {
    document.getElementById('listControls').classList.add('hidden');
});

// Change Mode
document.getElementById('changeMode').addEventListener('click', () => {
    if (document.getElementById('remoteVid').classList.contains('presentation')) {
        document.getElementById('remoteVid').classList.remove('presentation');
        document.getElementById('present').classList.add('hidden');
        document.getElementById('remoteVid').classList.add('discussion');
        document.getElementById('changeMode').innerHTML = '<i class="fas fa-object-group"></i> Enter Presentation Mode';
    }
    else {
        document.getElementById('remoteVid').classList.remove('discussion');
        document.getElementById('remoteVid').classList.add('presentation');
        document.getElementById('present').classList.remove('hidden');
        document.getElementById('changeMode').innerHTML = '<i class="fas fa-object-group"></i> Enter Discussion Mode';
    }
});