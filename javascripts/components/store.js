import util from '../helpers/util.js' 

const makeStore = () =>{
    let domString = '<h2>Guh</h2>';
    util.printToDom('store-container', domString);
};

export default { makeStore };