var age = 17; // Private var (not included in exports)
var state = 'single';

function sing(){
    console.log('lalala');
}

function cry(){
    console.log('boo hoo hoo');
}

function getArrested(){
    console.log('I am in jail');
}

module.exports = {
    cry: cry,
    getArrested: getArrested,
    sing: sing,
    state: state
}