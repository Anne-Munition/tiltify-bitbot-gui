// RENAME THIS FILE TO: config.js

// Tiltify Application Access Token.
// https://dashboard.tiltify.com/YOUR_USERNAME/my-account/connected-accounts/applications
const tiltifyToken = "123456789";

// Twitch chat OAuth Token.
// https://twitchapps.com/tmi/
// Include the 'oauth:'
const twitchToken = "oauth:123456789";

// *** OPTIONAL ***
// Websockets can be used to sync multiple clients as to what donations have been cleared/acknowledged.
// This way a streamer can work in tandem with a donation reader or other persons, and all are aware what donations have already been read out.
// If you have a Socket.IO websocket 3.x or 4.x server, echo the data from a 'tiltify_clear' message
// Example:
//     socket.on('tiltify_clear', (data) => {
//       socket.broadcast.emit('tiltify_clear', data)
//     })
const websocketUrl = "wss://example.com";
