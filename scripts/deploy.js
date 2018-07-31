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

/*DEPLOYMENT STEPS
1. $ git checkout gh-pages
2. $ npm run build
3. $ git add .
4. $ git commit - m "commit msg"
5. $ git push / git push origin +gh-pages
6. $ npm run deploy

If it works correctly, home page is rendered at https://hoppy1982.github.io/learning-record/
If it's gone readme.md is rendered.
IT MIGHT BE A CACHING THING MARK!!!s CLEAR BROWSER CACHE!!!
*/
