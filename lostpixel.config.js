export const config = {
 customShots: {
    currentShotsPath: "./cypress/screenshots",
  },
  imagePathBaseline: "./baseline-images",
  imagePathCurrent: "./current-images",
  imagePathDifference: "./difference-images",
  // OSS mode 
  generateOnly: true,
  failOnDifference: true
  
  // Lost Pixel Platform (to use in Platform mode, comment out the OSS mode and uncomment this part )
  // lostPixelProjectId: "cls7guw1prxpwhf0e79z2fe5k",
  // apiKey: process.env.LOST_PIXEL_API_KEY,
};