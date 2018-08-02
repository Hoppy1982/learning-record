const path = require('path')
const fs = require('fs')
const util = require('util')
const mkdirp = util.promisify(require('mkdirp'))

const readDir = util.promisify(fs.readdir)
const copyFile = util.promisify(fs.copyFile)


const toCopy = [
  {
    name: 'favicon stuffs',
    src: path.join(__dirname, '/../client/src/static/toRoot'),
    dest: path.join(__dirname, '/../client/build'),
    ext: '*'
  },
  {
    name: 'images',
    src: path.join(__dirname, '/../client/src/static/images'),
    dest: path.join(__dirname, '/../client/build/static/images'),
    ext: '.jpg'
  }
]


const copyPromises = toCopy.map(async ({src, dest, ext}) => {
    await mkdirp(dest)

    const unfilteredFiles = await readDir(src)
    const filteredFiles = filterFiles(unfilteredFiles, ext)

    await Promise.all(filteredFiles.map(file => {
      return copyFile(path.join(src, file), path.join(dest, file))
    }))
  }

)

Promise.all(copyPromises)
  .then(console.log("All files successfully copied.."))
  .catch(err => "Files failed to copy..")


function filterFiles(filenames, ext) {
  return filenames.filter(filename => {
    if (ext === '*') {return true}
    if (path.extname(filename) === ext) {return true}
  })
}
