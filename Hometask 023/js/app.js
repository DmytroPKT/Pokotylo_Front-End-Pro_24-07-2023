"use strict";

const users = getUsers('users', defaultUsers);
const usersID = getUsers('usersID', defaultUsersIDs);

showRows(users);

document.querySelector('#btnAdd input').addEventListener('click', showAddUserForm);