var convo = {
  ice: {
    says: [
      'Hello!',
      "Let's explore Blockchain Technology and Bitcoins with <em>me</em>.",
      "To begin, choose how you'd like this conversation to proceed...",
      '...We can either talk about <strong>Blockchain Technology and Cryptro Currency</strong> or <strong>Nfts</strong>. Which one shall it be?',
      '<img src= https://cdn.discordapp.com/attachments/926055068271251467/926055266561163274/bot-hi.gif />',
    ],

    reply: [
      {
        question: 'No, thanks.',
        answer: 'end',
      },
      {
        question: 'NFTs',
        answer: 'nft',
      },
      {
        question: 'Blockchain',
        answer: 'blockchain',
      },
      {
        question: 'Wanna Play!',
        answer: 'play',
      },
      {
        question: 'Cryptocurrency',
        answer: 'crypto',
      },
    ],
  },

  nft: {
    says: [
      'Ok got it What do you want to know about Nft ?',
      '<img src=https://cdn.discordapp.com/attachments/926055068271251467/926391651809767444/nft-rocket-min.gif />',
    ],
    reply: [
      {
        question: 'What is an NFT?',
        answer: 'about_nft', // nft more option
      },
      {
        question: 'Got it: on with the chat!',
        answer: 'chapter-one',
      },
    ],
  },
  about_nft: {
    says: [
      'NFT stands for non-fungible token.',
      'Non-fungible is an economic term that you could use to describe things like your furniture, a song file, or your computer.',
      'These things are not interchangeable for other items because they have unique properties.',

      '<img src=https://cdn.discordapp.com/attachments/926055068271251467/926099474324025404/nonfungible.gif />',
    ],
    reply: [
      {
        question: 'Tell me more.',
        answer: 'nft_more',
      },
      {
        question: 'Got it: on with the chat!',
        answer: 'chapter-one',
      },
    ],
  },

  nft_more: {
    says: [
      'NFTs are tokens that we can use to represent ownership of unique items.',
      'They let us tokenise things like art, collectibles, even real estate.',
      "They can only have one official owner at a time and they're secured by the Ethereum blockchain  no one can modify the record of ownership or copy/paste a new NFT into existence.",

      '<img src=https://cdn.discordapp.com/attachments/926055068271251467/926091479515004938/NFT_COLLINS.gif />',
    ],
    reply: [
      {
        question: 'Why its useful ?',
        answer: 'useful',
      },
      {
        question: 'How do NFTs work ?',
        answer: 'nft_works',
      },
    ],
  },

  useful: {
    says: [
      'NFTs and Ethereum solve some of the problems that exist in the internet today.',
      "As everything becomes more digital, there's a need to replicate the properties of physical items like scarcity, uniqueness, and proof of ownership.",
      "Not to mention that digital items often only work in the context of their product. For example you can't re-sell an iTunes mp3 you've purchased,",
      "or you can't exchange one company's loyalty points for another platform's credit even if there's a market for it.",

      '<img src=https://cdn.discordapp.com/attachments/926055068271251467/926086424065892372/bored-ape-yacht-club-nft.gif />',
    ],
    reply: [
      {
        question: 'Why its useful?',
        answer: 'useful',
      },
      {
        question: 'Got it: on with the chat!',
        answer: 'chapter-one',
      },
    ],
  },
  nft_works: {
    says: [
      'NFTs are different from ERC-20 tokens, such as DAI or LINK, in that each individual token is completely unique and is not divisible.',
      "NFTs give the ability to assign or claim ownership of any unique piece of digital data, trackable by using Ethereum's blockchain as a public ledger.",
      'An NFT is minted from digital objects as a representation of digital or non-digital assets. For example, an NFT could represent:',
      '1.Digital Art:',
      '1️⃣GIFs',
      '2️⃣Collectibles',
      '3️⃣Music',
      '4️⃣Videos',

      '2.Real World Items:',
      '5️⃣Deeds to a car',
      '6️⃣Tickets to a real world event',
      '7️⃣Tokenized invoices',
      '8️⃣Legal documents',
      '9️⃣Signatures',
      '🔟Validating information',

      '<img src=https://cdn.discordapp.com/attachments/926055068271251467/926058696067411988/blockchainbot.gif />',
    ],
    reply: [
      {
        question: 'Why its useful ? ',
        answer: 'useful',
      },
      {
        question: 'Got it: on with the chat!',
        answer: 'chapter-one',
      },
    ],
  },

  //Blockchains

  blockchain: {
    says: [
      'Ok got it What do you want to know about Blockchain Technology  ?',
      '<img src=https://cdn.discordapp.com/attachments/926055068271251467/926392165180010556/blockchainuse.gif />',
    ],
    reply: [
      {
        question: 'What is Blockchain?',
        answer: 'about_blockchain',
      },
      {
        question: 'Is Blockchain Secure?',
        answer: 'secure',
      },
    ],
  },
  about_blockchain: {
    says: [
      'A blockchain is a decentralized ledger of all transactions across a peer-to-peer network.',
      'Using this technology, participants can confirm transactions without a need for a central clearing authority. ',
      'Potential applications can include fund transfers, settling trades, voting, and many other issues.',
      '<img src=https://cdn.discordapp.com/attachments/926055068271251467/926058696067411988/blockchainbot.gif />',
    ],
    reply: [
      {
        question: 'Is Blockchain Secure?',
        answer: 'secure',
      },
      {
        question: 'Got it: on with the chat!',
        answer: 'chapter-one',
      },
    ],
  },
  secure: {
    says: [
      'Blockchain technology achieves decentralized security and trust in several ways.',
      'To begin with, new blocks are always stored linearly and chronologically. ',
      ' That is, they are always added to the “end” of the blockchain. After a block has been added to the end of the blockchain, it is extremely difficult to go back and alter the contents of the block unless a majority of the network has reached a consensus to do so.',
      'That’s because each block contains its own hash, along with the hash of the block before it, as well as the previously mentioned time stamp. Hash codes are created by a mathematical function that turns digital information into a string of numbers and letters. If that information is edited in any way, then the hash code changes as well.',

      '<img src=https://cdn.discordapp.com/attachments/926055068271251467/926409501173747712/blockchainit.gif />',
    ],
    reply: [
      {
        question: 'Tell me more.',
        answer: 'more_blockchain',
      },
      {
        question: 'Got it: on with the chat!',
        answer: 'chapter-one',
      },
    ],
  },
  more_blockchain: {
    says: [
      'Let’s say that a hacker, who also runs a node on a blockchain network, wants to alter a blockchain and steal cryptocurrency from everyone else.',
      'If they were to alter their own single copy, it would no longer align with everyone else’s copy. . ',
      'When everyone else cross-references their copies against each other, they would see this one copy stand out, and that hacker’s version of the chain would be cast away as illegitimate. ',
      '<img src=https://cdn.discordapp.com/attachments/926055068271251467/926412403053322252/fraudless-blockchain.gif />',
    ],
    reply: [
      {
        question: 'How Are Blockchains Used?',
        answer: 'block_use',
      },
      {
        question: 'Got it: on with the chat!',
        answer: 'chapter-one',
      },
    ],
  },

  block_use: {
    says: [
      'As we now know, blocks on Bitcoin’s blockchain store data about monetary transactions. Today, there are more than 10,000 other cryptocurrency systems running on blockchain.',
      'But it turns out that blockchain is actually a reliable way of storing data about other types of transactions as well. ',
      'Some companies that have already incorporated blockchain include Walmart, Pfizer, AIG, Siemens, Unilever, and a host of others.',
      'For example, IBM has created its Food Trust blockchain to trace the journey that food products take to get to their locations.',
      '<img src=https://cdn.discordapp.com/attachments/926055068271251467/926412403053322252/fraudless-blockchain.gif />',
    ],
    reply: [
      {
        question: 'Banking and Finance',
        answer: 'block_use',
      },
      {
        question: 'Currency',
        answer: 'chapter-one',
      },
      {
        question: 'Healthcare',
        answer: 'chapter-one',
      },
      {
        question: 'Property Records',
        answer: 'chapter-one',
      },
      {
        question: 'Voting',
        answer: 'chapter-one',
      },
      {
        question: 'Supply Chains',
        answer: 'chapter-one',
      },
    ],
  },

  // If Play click then this gonna be happen
  play: {
    says: [
      '<img src=https://cdn.discordapp.com/attachments/926055068271251467/926055266024325160/bot-talk.gif />',
    ],
    reply: [
      {
        question: '😂😂',
        answer: 'comedy',
      },
    ],
  },
  // comedy
  comedy: {
    says: [
      'Lol !!',
      '<img src=https://cdn.discordapp.com/attachments/926055068271251467/926068955242709022/comedy.gif />',
      'Your next answer will take you to another prompt...',
      '...Or to the end of the chat, an “escape valve” we can use to end the chat if you want.',
    ],
    reply: [
      {
        question: 'Give me another prompt.',
        answer: 'chapter-four',
      },
      {
        question: 'End the chat.',
        answer: 'end',
      },
    ],
  },

  // Intro of my Bot
  'intro-context': {
    says: [
      'I am a Blockchain bot. I was created by Buddhadeb Chhetri.',
      '<img src=https://cdn.discordapp.com/attachments/926055068271251467/926055264568893510/bot-info.gif />',
      'I help to others to get the information about blockchain and crypto.',
      '...With a way to return back to the main trunk of the conversation, like so:',
    ],
    reply: [
      {
        question: 'To the main topic',
        answer: 'chapter-one',
      },
    ],
  },

  // main conversation trunk
  'chapter-one': {
    says: [
      'Excellent!',
      '(This is the main topic of our chat.)',
      'Blockchain Technology and Cryptocurrency!',
      'Now, which do you prefer ?',
    ],
    reply: [
      {
        question: 'Blockchain!',
        answer: 'blockchain',
      },
      {
        question: 'Cryptocurrency',
        answer: 'crypto',
      },
      {
        question: 'Who are you ?',
        answer: 'intro-context',
      },
    ],
  },
  // Cruptocurrency
  crypto: {
    says: [
      'A cryptocurrency is a medium of exchange that is digital, encrypted and decentralized.',
      'Unlike the U.S. Dollar or the Euro, there is no central authority that manages and maintains the value of a cryptocurrency.',
      'Instead, these tasks are broadly distributed among a cryptocurrency’s users via the internet.',
      '<img src=https://cdn.discordapp.com/attachments/926055068271251467/926405798484148284/crypto.gif />',
    ],
    reply: [
      {
        question: 'Give me another prompt.',
        answer: 'chapter-four',
      },
      {
        question: 'End the chat.',
        answer: 'end',
      },
    ],
  },

  // this chapter is skipped
  'chapter-three': {
    says: [
      'Go ahead to the next chapter.',
      '<img src=http://meanbusiness.com/wp-content/uploads/2018/03/Coral-Participate-Phone_and_Laptop.jpg />',
    ],
    reply: [
      {
        question: 'OK, I will.',
        answer: 'chapter-four',
      },
    ],
  },

  'chapter-four': {
    says: [
      "Hey, you're awesome!",
      '<img src=http://meanbusiness.com/wp-content/uploads/2018/02/mel_b-Thank-You.gif />',
      'More prompts?',
    ],
    reply: [
      {
        question: 'Nope.',
        answer: 'end',
      },
      {
        question: 'Yes, more prompts!',
        answer: 'chapter-five',
      },
    ],
  },
  'chapter-five': {
    says: [
      "Answering 'Yes' here will open a new window with a page from another site...",
      "...And confirm that you're awesome, again.",
      "Answering 'Not interested' will end the chat.",
    ],
    reply: [
      {
        question: 'Not interested.',
        answer: 'end',
      },
      {
        question: 'Yes!',
        answer: 'externalResourceFunction',
      },
    ],
  },
  // Ending the chat
  end: {
    says: [
      'Thanks for your time and attention.',
      '<img src=https://media.giphy.com/media/xUOxeXsWhw6DCW1cSA/giphy.gif>',
      'The chat is over, but you can <strong>start over</strong> to see how this conversation could have gone differently.',
    ],
    reply: [
      {
        question: 'Start over 😁',
        answer: 'ice',
      },
    ],
  },
}

var chatWindow = new Bubbles(document.getElementById('chat'), 'chatWindow')

chatWindow.talk(convo)

externalResourceFunction = function () {
  chatWindow.talk(convo, 'chapter-four')
  window.open(
    'https://cdn.discordapp.com/attachments/926055068271251467/926405798484148284/crypto.gif',
    '_blank',
    'toolbar=no,scrollbars=no,menubar=no,resizable=no,location=no,titlebar=no,width=300,height=600',
  )
}
