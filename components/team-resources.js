module.exports = (app, Telegraf) => {
  const Listeners = {
    welcome: {
      listen: "1) Welcome 2 Team❗️",
      reply:
        "Welcome to the team❗️\n\nGo through the buttons below to make sure you’re connected to everything WorldVentures..."
    },
    teamChat: {
      listen: "Team Chats 👫",
      reply:
        "Telegram is the number one way the team maintains communication with each other via the channel and chat below…\n\n💠 Team Unstoppable Channel 💠\n Big training events, team calls, team bonding, rank recognition will be announced here. Pay attention to this page as much as possible.\n\n✅ Add business reps ONLY to this channel!\nClick the link below to join now!\n t.me/UnstoppableChannel\n\n💠 Team Unstoppable Chat 💠 \n A group chat to stay plugged in to our team members from around the world! Welcome your new teammates, post travel parties, and recognize new ranks here too.\n\n ✅ Add business reps ONLY to this chat! \n Click the link below to join now! \nt.me/UnstoppableGroupChat"
    },
    teamApp: {
      listen: "Team Apps 📱",
      reply:
        "💠 Dreamtrips 💠\nUser ID and password have been emailed to you. Set up your profile picture and start booking your first DreamTrip!\n\n💠 ChillinWW (ChillinWorldWide) 💠\nThis app has EVERYTHING you need for success in WorldVentures aside from your mentors! Plug in to the QuickCoach videos, Flye SmartCard (password: boomer1), or Audios from any of our top leaders."
    },
    facebookGroup: {
      listen: "Facebook Groups 🌎",
      reply:
        "💠 Team Unstoppable FB Group 💠 \nThe main Facebook page where we connect with ALL Unstoppable teammates and where IMDs Tere and Mary Kampe and other leaders welcome new teammates and post about huge company updates and events. \n\n ✅ Add business reps ONLY to this group! \n\n 💠 Funstoppable FB Group 💠 \nWhere all Unstoppable Dreamtrips members come together and share stories about their experiences with all things DreamTrips (trip, DreamTrips Local, Price Pledge, etc. testimonials). This is not a Facebook page about business, so no “Welcome to the Team” posts or anything business related here!\n\n✅ Add EVERYONE to this group!"
    },
    home: { listen: "Home 🏠" }
  };

  Listeners.welcome.keyboard = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton(Listeners.teamChat.listen),
          markup.callbackButton(Listeners.teamApp.listen)
        ],
        [
          markup.callbackButton(Listeners.facebookGroup.listen),
          markup.callbackButton(Listeners.home.listen)
        ]
      ])
      .resize()
  );

  for (let key in Listeners) {
    const Listener = Listeners[key];
    app.hears(Listener.listen, context => {
      return context.reply(Listener.reply, Listener.keyboard).then();
    });
  }
};
