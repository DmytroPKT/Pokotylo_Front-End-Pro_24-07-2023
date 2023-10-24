"use strict";
const tableKeys = ['No', 'ID', 'Name', 'Lastname', 'Actions'];
const longTableKeys = ['No', 'ID', 'Name', 'Lastname', 'Login', 'Email', 'City'];
const defaultUsersIDs = [1, 10234, 10235];
const defaultUsers = [
    {
        id: defaultUsersIDs[0],
        name: 'Admin',
        lastName: 'Admin',
        login: 'admin',
        email: 'admin@admin.admin',
        city: 'New-York',
    },
    {
        id: defaultUsersIDs[1],
        name: 'John',
        lastName: 'Smith',
        login: 'user',
        email: 'ohn@ter.com',
        city: 'Johanesburg',
    },
    {
        id: defaultUsersIDs[2],
        name: 'Jacobs',
        lastName: 'Taylor',
        login: 'lost23188',
        email: 'jacobs-taylor@coffe.fr',
        city: 'Karthagen',
    },
];