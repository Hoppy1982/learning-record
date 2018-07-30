const ghpages = require('gh-pages')

const dir = 'client/build'
const options = {
  src: '**/*',
  branch: 'gh-pages',
  dest: '.'
}

ghpages.publish(dir, options, postPublish())

function postPublish(err) {
  if (err) {throw err}
  console.log('deploy script complete..')
}
