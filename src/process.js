const retrieve = require('./retrieve')

retrieve.getMemberDataAsObjects().then((x) => console.log(x.length))

