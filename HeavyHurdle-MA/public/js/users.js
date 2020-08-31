var users = [];

function addUser(user) {
    users[user.id] = user.name;

    var newUser = document.createElement('div');
    newUser.id = user.id;
    newUser.classList.add('user-container');
    document.getElementById('usersList').appendChild(newUser);
    var userName = document.createElement('div');
    userName.classList.add('user-name');
    userName.innerHTML = "<p>" + user.name + "</p>";
    document.getElementById(user.id).appendChild(userName);
    var userControls = document.createElement('div');
    userControls.classList.add('user-controls');
    userControls.innerHTML = "<i id='" + user.id + "-mute' class='fas fa-microphone-slash user-status invisible'></i><i id='"+ user.id +"-video' class='fas fa-video-slash user-status invisible'></i>"
    if (admin)
        userControls.innerHTML += "<i class='fas fa-cog admin-only'></i>"
    document.getElementById(user.id).appendChild(userControls);
}

function findUser(id) {
    return users[id];
}

function removeUser(id) {
    users[id] = null;
    console.log(users);
}