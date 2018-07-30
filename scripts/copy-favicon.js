const path = require('path')
const fs = require('fs')

const src = path.join(__dirname, '/../client/src/static/toRoot')
const dest = path.join(__dirname, '/../client/build')

fs.readdir(src, (err, filenames) => {
  if (err) {
    throw new Error(`Error reading filenames at ${src}`)
  }

  copyFiles(filenames)
})

function copyFiles(filenames) {
  filenames.forEach(filename => {
    fs.copyFile(`${src}/${filename}`, `${dest}/${filename}`, (err) => {
      if (err) {
        throw new Error(`Error copying ${filename}`)
      }

      console.log(`${filename} copied to ${dest}`)
    })
  })
}
