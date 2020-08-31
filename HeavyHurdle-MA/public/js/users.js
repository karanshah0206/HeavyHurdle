var users = [];

function addUser(user) {
    users[user.id] = user.name;
}

function findUser(id) {
    return users[id];
}

function removeUser(id) {
    users[id] = null;
    console.log(users);
}