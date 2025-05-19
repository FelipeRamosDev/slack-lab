require('dotenv').config();
const { App } = require('@slack/bolt');

const app = new App({
   socketMode: true,
   token: process.env.SLACK_BOT_TOKEN,
   signingSecret: process.env.SLACK_SIGNING_SECRET,
   appToken: process.env.SLACK_APP_TOKEN,
   // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
   // you still need to listen on some port!
   port: process.env.PORT || 3000
});

app.message(async ({ message, say }) => {
   console.log(message.text);
   await say(`You send me the message: ${message.text}`);
});

(async () => {
  // Start your app
  await app.start();

  app.logger.info('⚡️ Bolt app is running!');
})();
