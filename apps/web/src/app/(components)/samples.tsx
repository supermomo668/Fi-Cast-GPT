import { MessageUI } from "../models/messages";
import { PodcastGroup, Dialogues } from "../models/podcast";

export const SAMPLE_THOUGHT_MESSAGE = "(Upgrade to see!)"
export const SAMPLE_DIALOGUES: Dialogues = [
  {
    speaker : {
      name: "Harry Potter",
    },
    dialogue: "Hey Vader, have you tried Butterbeer? It's amazing!",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Darth Vader",
    },
    dialogue: 
      "Butterbeer? Is it strong enough to mask the taste of the Dark Side?",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Harry Potter",
    },
    dialogue: 
      "It's not about strength, it's about flavor! What's your favorite Sith snack then?",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Darth Vader",
    },
    dialogue: 
      "I find your lack of appreciation for the Dark Side's culinary delights disturbing. I prefer something more ominous, like Death Star-shaped cookies.",
    thought: SAMPLE_THOUGHT_MESSAGE
},
  {
    speaker : {
      name: "Harry Potter",
    },
    dialogue: 
      "Death Star-shaped cookies sound intriguing! Do they explode with flavor?",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Darth Vader",
    },
    dialogue: 
      "They do, metaphorically. What about your world? Any magical meals worth mentioning?",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Harry Potter",
    },
    dialogue: "Absolutely! Ever tried Chocolate Frogs? They jump in your mouth!",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Darth Vader",
    },
    dialogue: "Frogs? That sounds unsavory. However, I am curious about your Firewhisky. Is it as potent as it sounds?",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Harry Potter",
    },
    dialogue: 
      "Firewhisky is strong enough to make even dragons roar. Care to try some?",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Darth Vader",
    },
    dialogue: 
      "Perhaps another time. Tell me, Potter, do you have a favorite spell for cooking?",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Harry Potter",
    },
    dialogue: "Accio ingredients! It's quite handy when I'm feeling lazy.",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Darth Vader",
    },
    dialogue: 
      "Efficient, I'll give you that. In my realm, we rely more on precision and mastery. Do you duel over dinner as you do with wands?",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Harry Potter",
    },
    dialogue: 
      "Not exactly dueling, but we do have feasts and celebrations. How about the Sith? Any grand banquets?",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Darth Vader",
    },
    dialogue: 
      "Only when the Emperor commands it. The Dark Side doesn't indulge in frivolous feasts. We prefer more... focused gatherings.",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Harry Potter",
    },
    dialogue: 
      "I guess that explains your lean figure! Do you have any foods you miss from before you turned to the Dark Side?",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Darth Vader",
    },
    dialogue: 
      "There is one... Alderaanian spice pudding. It reminds me of a time before... before everything.",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Harry Potter",
    },
    dialogue: 
      "Food has a way of connecting us to memories. I hope you find a way to enjoy it again someday.",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Darth Vader",
    },
    dialogue: "Thank you, Potter. Your sentimentality is... unexpected.",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Harry Potter",
    },
    dialogue: 
      "Even Sith Lords deserve a good meal now and then. Perhaps one day we could share a Butterbeer.",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
  {
    speaker : {
      name: "Darth Vader",
    },
    dialogue: 
      "A curious proposition, Potter. Perhaps when the galaxy is less tumultuous.",
    thought: SAMPLE_THOUGHT_MESSAGE
  },
];

export const SAMPLE_ABSTRACT = "Harry Potter and Darth Vader engage in a humorous conversation about food, comparing magical treats like Butterbeer and Chocolate Frogs to Sith delights like Death Star-shaped cookies. They bond over nostalgia, with Harry offering a future Butterbeer as a gesture of camaraderie amidst their contrasting worlds of magic and darkness."

export const SAMPLE_PODCAST_GROUP: PodcastGroup = {
  hosts: [{ name: "Harry Potter"}],
  guests: [{ name: "Darth Vader"}],
};

export const SAMPLE_PODCAST = {
  topic: "food",
  abstract: SAMPLE_ABSTRACT,
  participants: SAMPLE_PODCAST_GROUP,
  dialogues: SAMPLE_DIALOGUES
}