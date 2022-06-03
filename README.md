# Tiltify BitBot GUI

#### A standalone desktop webpage to bridge Tiltify and InstructBot(BitBot) by use of Twitch chat. 
![Example Image](./example.png)

## Initial Setup
* Download and extract files and rename ``config-example.js`` to ``config.js``.
* Retrieve and enter the Tiltify Access Token and Twitch Chat OAuth Token.
* Open the ``tiltify.html`` file with a browser. (Tested in Firefox and Chrome)

## GUI Settings
The Tiltify and Twitch settings button colors signify the connection status.
* Red -> Disconnected
* Orange -> Connected, but needs further action
* Green -> Connected and Ready

### Misc
* New donations will appear with a purple background.
* Click on the purple donation to "Clear" the donation/background. This will help you keep track of what donations have been acknowledged.
* Click on the blue "Clear" button in the upper right to clear all donations.
* The purple icon is used to set a custom BitBot action. Use it for anything you can think of. It will post ``Custom`` in the temp Twitch chat.
* The campaign progress bar will fill with a green color. If the goal is reached or exceeded, it will change to a striped orange color.
* The raised and goal campaign amounts are updated in realtime.
* If donations/rewards are missed or misfired, they can be replayed by pressing the replay icon. This will resend the message to the temp Twitch chat. 

### Twitch Settings
* Click on the Twitch settings button in the upper right and enter the Twitch channel you want to send messages to.
  * This is best as a temporary or throwaway channel that other people are not going to notice or see.
* Click connect. Once connected the Twitch settings button will turn green.
* Click the Test button to ensure messages come through to the selected twitch channel.

### Tiltify Settings
* Click on the Tiltify settings button in the upper right and enter the Tiltify username for the campaign you want to follow.
  * The Tiltify settings button will turn orange once a connection is made.
  * Once Rewards and/or Incentives are enabled the Tiltify settings button will turn green.
* Past donations will be retrieved from the API if available and fill the page.
* Donation Rewards will be retrieved from the API if available and populate the rewards table.
* Press the Refresh button in the Tiltify settings to reestablish the Tiltify connection and refresh the data from the API.
* Toggle the Purple volume button in the Tiltify settings to mute/unmute the new donation notification sound. (DING)


 * INCENTIVES
    * All donation amounts will be posted to the temp twitch chat. Example: ``$10``
    * Enter an amount and click the Test button to send the amount to the temp Twitch chat and trigger BitBot.
  * REWARDS
    * If rewards are available they will populate in the table.
    * When somebody claims a reward with a donation it will post the donation ID to twitch chat prepended with an 'R'. Example: ``R123456``
    * Click the copy icon to copy the Reward ID to your clipboard.
    * Click the play icon to test send the reward to the temp Twitch chat.
    
### Optional Websocket Client Syncing
Websockets can be used to sync multiple clients as to what donations have been cleared/acknowledged.
This way a streamer can work in tandem with a donation reader or other persons, and all are aware what donations have already been read out.
If you have a Socket.IO websocket 3.x or 4.x server, echo the data from a 'tiltify_clear' message.

Example:
```js
socket.on('tiltify_clear', (data) => {
  socket.broadcast.emit('tiltify_clear', data)
})
```
The websocket URL will need to be added to the ``config.js`` file.
