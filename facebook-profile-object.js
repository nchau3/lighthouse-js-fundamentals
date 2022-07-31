let facebookProfile = {
  name: "Nicholas",
  friends: 3,
  messages: ["My first message!", "My second message?!"],
  postMessage: function(message) {
      let messageString = facebookProfile.messages;
      messageString.push(message);
      return messageString;
  },
  deleteMessage: function(index) {
      let messageString = facebookProfile.messages;
      messageString.splice(index, 1);
      return messageString;
  },
  addFriend: function() {
      facebookProfile.friends += 1;
      return facebookProfile.friends;
  },
  removeFriend: function() {
      facebookProfile.friends -= 1;
      return facebookProfile.friends;
  }
};