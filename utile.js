const path = require('path');
var glob = require("glob");

function entrys() {
    let entries = {};
    const paths = glob.sync('src/*/*.html')
    paths.map(file => {
        entries[path.basename(path.dirname(file))] = "/"+file;
    });
    return entries
}

export default {
    entrys: entrys(),
    base: "/"
}


