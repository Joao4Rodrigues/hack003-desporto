const { 
    closeConnection
} = require('./data/db');

const arr = [
    { name: ''}
];

async function insert() {
    for( const user of arr) {
        await insereUser(user);
    }
    closeConnection();
}

insert().then(() => console.log(done));

