

const path = require('path');




// console.log(path.sep);

// console.log(process.env.PORT);

// console.log(path.deliminator);
// console.log(path.basenamecls)


// console.log(path);

console.log("\n");





const currentFilePath = __filename;

// console.log(currentFilePath);


let result = path.basename(currentFilePath, ".js");

// console.log(result);



let dirname = path.dirname(currentFilePath);

// console.log('directory name => ',dirname);



// console.log(' extention  name => ', path.extname(currentFilePath));


// console.log(" extention name 2 => ", path.extname('index.md.js'));


let pathtoFile = path.format({
    dir: '/public /home',
    base: 'index.html'
})


// console.log(pathtoFile);


// console.log("isAbsolute", path.isAbsolute(currentFilePath));
// console.log('is absolute ', path.isAbsolute('index.js'));
// console.log('is absolute ', path.isAbsolute('/index.js'));
// console.log('is absolute ', path.isAbsolute('./index.js'));
// console.log('is absolute ', path.isAbsolute('../index.js'));


let pathjoin = path.join('/home','js', 'dist', 'bin', 'index.js');

// console.log(pathjoin);

// console.log('parse => ', path.parse(currentFilePath));

console.log('\n');


// console.log(' Relative => ', path.relative('/home/user/config', '/home/admin/index.js'));


// console.log(' relative path is ', path.relative('/home/user/guduu/garry/js/bin', '/home/admin/js/bin/index.js'))



console.log('Resolve => ', path.resolve());


console.log('normalize => ', path.normalize(' //home//user//admin//js'));








console.log("\n");