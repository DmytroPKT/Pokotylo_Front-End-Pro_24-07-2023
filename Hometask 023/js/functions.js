"use strict";

function getUsers(storageName, defaultArray) {
    if (!(localStorage.getItem(storageName)) || localStorage.getItem(storageName).length <= 2) {
        return defaultArray;
    } else {
        return JSON.parse(localStorage.getItem(storageName));
    }
}

function showRows(users) {
    document.getElementById('users').innerHTML = '';
    showKeyRow(tableKeys);
    for (let user of users) {
        showUserRow(user);
    };
}

function showKeyRow(keys, parent) {
    let container;
    if (!parent) {
        container = createElement('div', '#users', '', {'className': 'user-data'});
    } else {
        container = parent;
    };

    for (let i = 0; i < keys.length; i++) {
        if (i === (keys.length - 1) && keys.findIndex(item => item == 'Actions') != -1) {
            createElement('div', container, 'Actions');
        } else {
            createElement('div', container, keys[i]);
        };
    };
}

function showUserRow(user, parent, type) {
    let container;
    if (!parent) {
        container = createElement('div', '#users', '', {'data-user-id': user.id, 'className': 'user-data'});
        container.id = user.id;
    } else {
        container = parent;
    }

    createElement('div', container, users.indexOf(user) + 1, {className: 'user-data'}); // element no
    createElement('div', container, user.id, {className: 'user-id', 'user-id' : user.id}); // element id
    createElement('div', container, user.name, {className: 'user-name', 'name-user-id' : user.id}); // element name
    createElement('div', container, user.lastName, {className: 'user-last-name', 'lastname-user-id' : user.id}); // element last name
    
    if (type) {
    createElement('div', container, user.login, {className: 'user-login', 'login-user-id' : user.id}); //element login
    createElement('div', container, user.email, {className: 'user-email', 'email-user-id' : user.id}); //element email
    createElement('div', container, user.city, {className: 'user-city', 'city-user-id' : user.id}); //element city
    }

    if (!type) {
        const actionsElement = createElement('div', container, '', {className: 'actions', 'data-id': user.id}); // edit, delete button parent element

    createElement(
        'input',
        actionsElement,
        '',
        {
            type: 'button',
            value: 'View',
            'data-type': 'View',
        },
        {
            click: handleViewUser,
        }
    );// view button
    createElement(
        'input',
        actionsElement,
        '',
        {
            type: 'button',
            value: 'Edit',
            'data-type': 'Edit',
        },
        {
            click: handleEditUser,
        }
    );// edit button

    createElement(
        'input',
        actionsElement,
        '',
        {
            type: 'button',
            value: 'Delete',
            'data-type': 'Delete',
        },
        {
            click: handleDeleteUser,
        }
    );// delete button
    };
}

function handleViewUser(event) {
    const parent = document.getElementById('form');
    const div1 = document.createElement('div');
    cleanElement(parent);
    parent.appendChild(div1);
    div1.classList.add('view-string');
    showKeyRow(longTableKeys, div1);
    const formElem = document.createElement('form');
    parent.appendChild(formElem);
    formElem.classList.add('view-string');
    const id = event.target.parentNode.getAttribute('data-id');
    const userIndex = users.findIndex(user => user.id == id);
    const user = users[userIndex];
    showUserRow(user, formElem, 1);
    const buttonContainer = document.createElement('div');
    parent.appendChild(buttonContainer);
    buttonContainer.classList.add('view-string');
    createElement(
        'input',
        buttonContainer,
        '',
        {
            type: 'button',
            value: 'Close',
            className: 'action-button', 
        },
        {
            click: cleanActionBox
        }
    ); // close button
}

function showAddUserForm() {
    const parentSelector = document.getElementById('form');
    cleanElement(parentSelector);
    const formSelector = document.createElement('form');
    parentSelector.appendChild(formSelector);
    formSelector.classList.add('view-string');
    const buttonContainer = document.createElement('div');
    parentSelector.appendChild(buttonContainer);
    buttonContainer.classList.add('view-string');

    createElement(
        'input',
        formSelector,
        '',
        {
            name: 'login',
            type: 'text',
            placeholder: 'Enter login',
        }
    ); // login input

    createElement(
        'input',
        formSelector,
        '',
        {
            name: 'name',
            type: 'text',
            placeholder: 'Enter name',
        }
    ); // name input

    createElement(
        'input',
        formSelector,
        '',
        {
            name: 'lastName',
            type: 'text',
            placeholder: 'Enter last name',
        }
    ); // last name input

    createElement(
        'input',
        formSelector,
        '',
        {
            name: 'email',
            type: 'text',
            placeholder: 'Enter email',
        }
    ); // email input

    createElement(
        'input',
        formSelector,
        '',
        {
            name: 'city',
            type: 'text',
            placeholder: 'Enter city',
        }
    ); // city input

    createElement(
        'input',
        buttonContainer,
        '',
        {
            type: 'button',
            value: 'Save'
        },
        {
            click: handleSaveUser
        }
    ); // save button
    
    createElement(
        'input',
        buttonContainer,
        '',
        {
            type: 'button',
            value: 'Cancel',
            className: 'action-button', 
        },
        {
            click: cleanActionBox
        }
    ); // cancel button
    createErrorMessage(parentSelector);
}

function createErrorMessage(parent) {
    const errorMsg = document.createElement('p');
    parent.appendChild(errorMsg);
    errorMsg.id = 'error-message';
}

function handleSaveUser() {
    const formElements = document.forms[0].elements;
    const login = formElements.login.value;
    const name = formElements.name.value;
    const lastName = formElements.lastName.value;
    const email = formElements.email.value;
    const city = formElements.city.value;

    const user = {
        name,
        lastName,
        login,
        email,
        city,
    };

    const isValid = validate(user);

    if (isValid) {
        user.id = createID();
        saveUser(user);
        cleanActionBox();
    };
}

function saveUser(newUser) {
    users.push(newUser);
    updateStorage('users', users);
    showUserRow(newUser);
}

function validate(user) {
    const msg = document.getElementById('error-message');
    msg.innerHTML = '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for (let data in user) {
        if (user[data] === ''){
            msg.textContent= 'Please fill out all fields';
            return false;
        };
        if (user[data] != user.login && !isNaN(user[data])) {
            msg.textContent= 'Only login can be numeric';
            return false;
        };
        if (user[data] === user.email) {
            if (!emailRegex.test(user[data])) {
                msg.textContent= 'Please, enter proper email';
                return false;
            };
        };
    };
    return true;
}

function removeElement(element) {
    if (typeof element === 'string') {
        document.querySelector(element).remove();
    } else {
        element.remove();
    };
}

function cleanElement(element) {
    if (typeof element === 'string') {
        document.querySelector(element).innerHTML = '';
    } else {
        element.innerHTML = '';
    }   
}

function handleDeleteUser(event) {
    cleanActionBox();
    const userId = event.target.parentNode.getAttribute('data-id');
    const userIndex = users.findIndex(user => user.id == userId);
    const user = users[userIndex];
    const parent = document.getElementById('form');
    createElement('p', parent, `Are you sure that you want to delete (ID: ${userId}) ${user.name} ${user.lastName}?`);
    createElement(
        'input',
        parent,
        '',
        {
            type: 'button',
            value: 'Yes',
            buttonId: userId,
            className: 'action-button', 
        },
        {
            click: deleteUserById
        }
    ); // yes button

    createElement(
        'input',
        parent,
        '',
        {
            type: 'button',
            value: 'No',
            className: 'action-button', 
        },
        {
            click: cleanActionBox
        }
    ); // no button
}

function handleEditUser(event) {
    const parent = document.getElementById('form');
    const div1 = document.createElement('div');
    cleanElement(parent);
    parent.appendChild(div1);
    div1.classList.add('view-string');
    showKeyRow(longTableKeys, div1);
    const formElem = document.createElement('form');
    parent.appendChild(formElem);
    formElem.classList.add('view-string');
    const id = event.target.parentNode.getAttribute('data-id');
    const userIndex = users.findIndex(user => user.id == id);
    const user = users[userIndex];
    showEditRow(user, formElem);
    createErrorMessage(parent);
}

function showEditRow(user, parent) {
    createElement('div', parent, users.indexOf(user) + 1, {className: 'user-data'}); // element no
    createElement('div', parent, user.id, {className: 'user-id', 'user-id' : user.id}); // element id
    const buttonContainer = document.createElement('div');
    parent.parentNode.appendChild(buttonContainer);
    buttonContainer.classList.add('view-string');

    createElement(
        'input',
        parent,
        '',
        {
            name: 'name',
            type: 'text',
            placeholder: 'Enter name',
            value: user.name,
        }
    ); // login input

    createElement(
        'input',
        parent,
        '',
        {
            name: 'lastName',
            type: 'text',
            placeholder: 'Enter last name',
            value: user.lastName,
        }
    ); // name input

    createElement(
        'input',
        parent,
        '',
        {
            name: 'login',
            type: 'text',
            placeholder: 'Enter login',
            value: user.login,
        }
    ); // last name input

    createElement(
        'input',
        parent,
        '',
        {
            name: 'email',
            type: 'text',
            placeholder: 'Enter email',
            value: user.email,
        }
    ); // email input

    createElement(
        'input',
        parent,
        '',
        {
            name: 'city',
            type: 'text',
            placeholder: 'Enter city',
            value: user.city,
        }
    ); // city input

    createElement(
        'input',
        buttonContainer,
        '',
        {
            btnId: user.id,
            type: 'button',
            value: 'Save',
            className: 'action-button', 
        },
        {
            click: handleSaveEditUser
        }
    ); // save button

    createElement(
        'input',
        buttonContainer,
        '',
        {
            type: 'button',
            value: 'Cancel',
            className: 'action-button', 
        },
        {
            click: cleanActionBox
        }
    ); // cancel button
}

function cleanActionBox() {
    cleanElement(document.getElementById('form'));
}

function handleSaveEditUser(event) {
    const id = event.target.getAttribute('btnId');
    const parent = document.forms[0].elements;

    const editUserIndex = users.findIndex(user => (user.id == id));
    const editUser = users[editUserIndex];

    const login = parent.login.value;
    const name = parent.name.value;
    const lastName = parent.lastName.value;
    const email = parent.email.value;
    const city = parent.city.value;

    const user = {
        login,
        name,
        lastName,
        email,
        city,
    };

    const isValid = validate(user);

    if (isValid) {
        editUser.name = name;
        editUser.lastName = lastName;
        editUser.login = login;
        editUser.email = email;
        editUser.city = city;
        updateStorage('users', users);
        showRows(users);
        cleanElement(document.getElementById('form'));
    };
}

function deleteUserById(event) {
    cleanActionBox();
    const id = event.target.getAttribute('buttonId');
    const indexToRemove = users.findIndex(user => user.id == id);
    users.splice(indexToRemove, 1);
    removeElement(`div[data-user-id="${id}"]`);
    updateStorage('users', users);
}

function createID() {
    const usersID = getUsers('usersID', defaultUsersIDs);
    const newID = usersID.toReversed()[0] + 1;
    usersID.push(newID);
    updateStorage('usersID', usersID)
    return newID;
}

function updateStorage(name, object) {
    localStorage.setItem(name, JSON.stringify(object));
}