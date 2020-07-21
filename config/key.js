if(process.env.NODE_ENV === 'production') { //만약 배포 후 상태이면
    module.export = require('./prod');      // .prod.js 파일에서 가져오고
} else {                                    // development 상태이면
    module.export = require('./dev');       // dev.js 파일에서 가져오고
}
