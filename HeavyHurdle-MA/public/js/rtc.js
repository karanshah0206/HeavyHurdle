let handleFail = function (err) { console.log("Error: ", err); }

let remoteContainer = document.getElementById("tempVid");

function addVideoStream (elementId) {
    let streamDiv = document.createElement("div");
    streamDiv.id = elementId;
    streamDiv.style = "height: 100%; width: 100%;";
    streamDiv.style.transform = "rotateY(180deg)"; // Mirroring video
    remoteContainer.appendChild(streamDiv);
}

function removeVideoStream (elementId) {
    let remDiv = document.getElementById(elementId);
    if (remDiv) remDiv.parentNode.removeChild(remDiv);
}

client.join(null, room, null, (uid) => {
    let localStream = AgoraRTC.createStream({ video: true, audio: true });
    localStream.init(() => {
        localStream.play("you-remVid");
        client.publish(localStream, handleFail);
    }, handleFail);
    agoraId = uid;
}, handleFail);

client.on("stream-added", (evt) => {
    client.subscribe(evt.stream, handleFail);
}, handleFail);

client.on("stream-subscribed", (evt) => {
    let stream = evt.stream;
    let streamId = String(stream.getId());
    addVideoStream(streamId);
    stream.play(streamId);
}, handleFail);

client.on("stream-removed", (evt) => {
    let stream = evt.stream;
    let streamId = String(stream.getId());
    stream.close();
    removeVideoStream(streamId);
}, handleFail);

client.on("peer-leave", (evt) => {
    let stream = evt.stream;
    let streamId = String(stream.getId());
    stream.close();
    removeVideoStream(streamId);
}, handleFail);