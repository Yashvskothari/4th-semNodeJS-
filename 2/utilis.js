const appConfig = {
  name: "myApp",
  version: "24.11.0",
  settings: {
    theme: "dark",
    port: 5000,
  },
};

const displayMessage = (user) => {
  return `Welcome , ${user}! You are running version ${appConfig.version}`;
};
module.exports = {
  config: appConfig,
  greet: displayMessage,
};
// module.exports = {
//   appConfig,
//   displayMessage
// } can be exported without key -value pair as well

// if exporting multiple functions or objects , then use "module.exports"
