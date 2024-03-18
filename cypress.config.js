const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('after:screenshot', (details) => {
        // Extract the filename from the original path
        const filename = path.basename(details.path);

        // Define the new path at the top level of the screenshots folder
        const newPath = path.join(config.screenshotsFolder, filename);

        console.log(newPath)

        return new Promise((resolve, reject) => {
          // fs.rename moves the file to the existing directory 'new/path/to'
          // and renames the image to 'screenshot.png'
          fs.rename(details.path, newPath, (err) => {
            if (err) return reject(err)

            // because we renamed and moved the image, resolve with the new path
            // so it is accurate in the test results
            resolve({ path: newPath })
          })
        })
      })
    },
  },
})