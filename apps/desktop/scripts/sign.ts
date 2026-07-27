import { sign } from '@electron/osx-sign'
const opts = {
  app: 'dist/mac-universal/Ricc.app'
};
sign(opts)
  .then(function (a) {
    // Application signed
    console.log('Application signed successfully:', a);
  })
  .catch(function (err) {
    // Handle the error
    console.error(err);
  })