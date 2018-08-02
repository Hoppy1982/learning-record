const fs = require('fs')
const path = require('path')
const util = require('util')
const mkdirp = util.promisify(require('mkdirp'))
const browserify = require('browserify')

const readDir = util.promisify(fs.readdir)
const writeFile = util.promisify(fs.writeFile)

const SOURCEJSDIR = path.join(__dirname, '../client/src/pages/')
const BUNDLEDJSDIR = path.join(__dirname, '../client/build/')


async function browserifyFiles() {
  const unFilteredFiles = await readDir(SOURCEJSDIR)
  const filteredFiles = unFilteredFiles.filter( file => file.match(/\.js$/) )

  const browserifiedFiles = filteredFiles.map(file => {
    return {
      file: file,
      browserifyObj: browserify({entries: `${SOURCEJSDIR}${file}`, debug: true})
    }
  })

  browserifiedFiles.forEach(obj => {
    obj.browserifyObj.bundle((err, buff) => {
      writeFile(`${BUNDLEDJSDIR}bundled-${obj.file}`, buff)
        .then(console.log(`${BUNDLEDJSDIR}bundled-${obj.file} successfully generated..`))
    })
    .on('error', (err) => {throw new Error(`Browserify error! ${err}`)})
  })

}

browserifyFiles()
