const fs = require('fs')
const path = require("path")
const pinataSDK = require('@pinata/sdk');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const pinata = new pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECERTS);

// pinata.testAuthentication().then((result) => {
//     //handle successful authentication here
//     console.log(result);
// }).catch((err) => {
//     //handle error here
//     console.log(err);
// });


// const fs = require('fs');
// const readableStreamForFile = fs.createReadStream('./images');
// const options = {
//     pinataMetadata: {
//         name: "Minting-App",
//         keyvalues: {
//             customKey: 'customValue',
//             customKey2: 'customValue2'
//         }
//     },
//     pinataOptions: {
//         cidVersion: 0
//     }
// };
// pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
//     //handle results here
//     console.log(result);
// }).catch((err) => {
//     //handle error here
//     console.log(err);
// });

async function uploadFullFolderOnPinata() {
    try {
        let basePathOfCsv = '../metadata';
        let filePaths = path.join(__dirname, '..', 'metadata');
        console.log('bbbbbbbbbbbbbbbbbbbbbbbbbb', basePathOfCsv);
        let jsonHash = await pinata.pinFromFS(filePaths);
        return jsonHash;
    } catch (error) {
        throw Error(error);
    }
}

uploadFullFolderOnPinata().then((res) => {
    console.log("rrrrrrrrrrrrrrrrrr:", res);
}).catch((error) => {
    console.log("eeeeeeeeeeee", error);
})