import { notarize } from '@electron/notarize';

 notarize({
  appPath: 'dist/mac-universal/Ricc.app',
  appleId: 'gideon.zhao720@gmail.com', // Login name of your Apple Developer account
  appleIdPassword: 'wzbz-vbpk-cpdd-yqcb', // App-specific password
  teamId: 'PBNZL6F865', // Team ID for your developer team
}).then(() => {
  console.log('Application notarized successfully');
}).catch((err) => {
  console.error('Error notarizing application:', err);
});