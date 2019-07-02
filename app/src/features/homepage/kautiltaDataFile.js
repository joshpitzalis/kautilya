const books = {
  1: {
    bookId: 1,
    coverImage: dictionary,
    name: `A Comprehensive Dictionary of Useful Terms in Library and Information Science`,
    price: 2495,
    language: "english",
    genre: [""],
    author: "Imran Khan",
    description: `This dictionary includes not only the terminology of the various specializations within the scope of Library and Information Science but also the vocabulary of publishing, printing, binding, the book trade, graphic arts, book history, literature, bibliography, telecommunications, computer science and various other emerging concepts in the profession. An attempt has been made to define and explain the various terms and concepts of the LIS profession in the easiest language. Moreover, for the purpose of easy understanding of the terms, the examples have also been provided, wherever considered necessary. As a rule, definition is given under an acronym only when it is generally used in preference to the full term. It is an extremely resourceful dictionary which provides detailed definitions to terminology that is utilized in the Library and Information Sciences. It is likely to be a valuable source for the LIS professionals, teachers as well as students in adding to their knowledge of profession. It will also prove to be highly beneficial for the NET aspirants in the LIS.`,
    purchaseLink: null,
    featured: false
  },
  2: {
    bookId: 2,
    coverImage: mahatma,
    name: `An Hour With The Mahatma`,
    price: 187.25,
    language: "english",
    genre: ["non-fiction"],
    author: "Dr. Alok Bajpai",
    description: `The book, ‘An Hour with the Mahatma’ is written by Dr. Alok Vajpayee. This book is an expression of author’s sentiments towards Gandhi. The initial section of the book deals with Gandhi’s famed life, his vows and questions that the people want to ask about Gandhi but without authentic sources. The latter chapters of the book review his life at a deeper level in an attempt to draw attention to psychosocial factors that declared his action. In the last few chapters the author deals with a critical examination of Gandhi’s philosophy, process and personality.`,
    purchaseLink: null,
    featured: false
  },
  3: {
    bookId: 3,
    coverImage: astro,
    name: `Astromentoring`,
    price: 350,
    language: "english",
    genre: [],
    author: "Y.V.V. Raghava",
    description: `People often are confused between meanings of mentoring and coaching. Simply defined mentoring is about correcting the aspirational deficiencies and coaching is correcting the skill deficiencies. Coaching and Mentoring are related, but they have significant differences. While coaching is functional, Mentoring is more relational. Coaching is within the confines of the functional relationship of the manager and employee. Mentoring generally crosses the job boundaries.`,
    purchaseLink: null,
    featured: false
  },
  4: {
    bookId: 4,
    coverImage: good,
    name: `Being Good`,
    price: 225,
    language: "english",
    genre: [],
    author: "Dr. Nanditesh Nilay",
    description: `This book is an attempt to explore the process of change in the behaviour of middle class particularly in India from last few decades. This is viewed in and around the basic needs of a human being, i.e. Food (Roti), Attire (Kapda), Home (Makaan). My observation, expression and narration for the present book revolve around those subtle and gross habits which entered everywhere and became part and parcel of people across and thus, in turn, put human values for the time being in the waiting list.`,
    purchaseLink: null,
    featured: false
  },
  5: {
    bookId: 5,
    coverImage: born,
    name: `Born on a Tuesday`,
    price: 225,
    language: "english",
    genre: [],
    author: "Elnathan John",
    description: `The book ‘Born on Tuesday’ has been authored by Elnathan. This is a novel that brings home the reality of what is happening in northen Nigeria. News reports of Boko Haram’s atrocities can’t adequately project the reality. Dantala, the prominent character of the novel lives in Bayan Layi, Nigeria and studies in a Sufi Quranic School. Unfortunately, he meets a gang leader Banda and is thrust into a world of fluid rules and casual violence. After the presidential elections were over, Dantala runs away and ends up living in a Salafi mosque. Gradually through the hurdles of adolescence, he embraces salafism as his new benefactor, Sheikh Jamal, reached him. The novel illuminates how the Sheikh deals with the growing jihadist extremism. This is a nuanced novel that elucidates on the rise of radical Islam in Northern Nigeria.`,
    purchaseLink: null,
    featured: false
  },

  6: {
    bookId: 6,
    coverImage: brahm,
    name: `Brahmacharya Yoga`,
    price: 100,
    language: "english",
    genre: ["yoga"],
    author: "Anuradha G",
    description: `The book has been written by Anuradha Goray. The author says that the present world is driven by high technology. So the people always quest for material success with little efforts. In such a situation, people need to effectively manage the lifestyle so that they would be able to maintain good health or the result will be devastating. Good maintenance and restoration of health is an art and a science as well. Therefore, the author advises that best methods are to drive away the maladies by practicing yoga which ensures a healthy and happy life.
  
      For achieving the above mentioned objective, the stage of Brahmachaya is crucial. In this stage, the children can be made physically, mentally and spiritually fit so that they can create a well-developed, and progressive nation because the practice of yoga impact on respiratory, digestive and nervous system. It helps mould their behaviour by stabilizing the mind and enhancing creativity.`,
    purchaseLink: null,
    featured: false
  },

  7: {
    bookId: 7,
    coverImage: chase,
    name: `Chasing India's Demographic Dividend`,
    price: 200,
    language: "english",
    genre: [],
    author: "J.P. Rai",
    description: `The book, ‘Chasing India’s Demographic Dividend’ written by J.P. Rai, an ex- IAS officer and the Advisor to the Prime Minister on skill Development. The National skills Qualification Framework was developed under his leadership. In this book he expresses his opinion that there is no doubt that the growing millions of unemployed and unemployable youths in our country pose the biggest threat to the social and economic fabric of our country.
  
      The author further mentions that the demographers make an assumption that those below 15 years of age are still in the stage of nurture and above the age of 60 have already lost their capacity to be economically productive. India’s demographic profile offers the potential for a caring and economically thriving society. To achieve its potential, the demographic bulge in productive age group must acquire the capacity to deliver as per expectation.`,
    purchaseLink: null,
    featured: false
  },
  8: {
    bookId: 8,
    coverImage: chip,
    name: `Chip in the Madrasa`,
    price: 225,
    language: "english",
    genre: [],
    author: "Vivek Sinha",
    description: `The book ‘A Chip in the Madrsa’ is an insight into the real tale of madrasa. The book unravels the vicious game that is being played by the Wahhabis and their vice hold on the Muslim minds across the globe. An erudite and progressive minded Maulvi Sahab wants to teach science, mathematics and computers at his madrasa in an Indian village with the support of many wise villagers. But the local powerful politicians and a national political party want to sabotage the plans as they don’t like the introduction of modern education at the madrasa of the village. The
  
      Wahhabis get fund from Saudi Arabia to unleash a lethal game to break the courage of Maulbi Sahab.`,
    purchaseLink: null,
    featured: false
  },
  9: {
    bookId: 9,
    coverImage: communication,
    name: `Communication and Civilization`,
    price: 250,
    language: "english",
    genre: [],
    author: "Jayraj Jayant Salgaokar",
    description: `The book ‘Communication &amp; Civilization’ is written by Jayraj Jayant Salgaokar and Amit Chatterjee. The book traces a strong connection between communication and its impacts on social and technological advancement of civilizations. It encapsulates the inventors, pioneers, upheavals and the forces that shape our society. It fuels the thirst for knowledge and encourages young minds to explore the world of communication and informs to make their choices for careers. It also paves ways for solving marketing problem for those who are interested in marketing the various products.`,
    purchaseLink: null,
    featured: false
  },
  10: {
    bookId: 10,
    coverImage: easy,
    name: `Easy Motion Tourist`,
    price: 225,
    language: "english",
    genre: [],
    author: "Leye Adenle",
    description: `Leye Adenle has written the book ‘Easy Motion Tourist’. The book is a compelling crime novel set in contemporary Lagos. It features Guy Collins, a British hack who stumbles into a murky underworld of the city. By the side of a club near one of the main hotels in Victoria Island, a woman’s body is found. As a potential suspect, a bystander named Collins is arrested by the police. After experiencing the unpleasant realities of a Nigerian Police cell, he is rescued by Amaka. The book delves into the dark side of Lagos with a narrative structure that feels fresh and an incredibly immersive atmosphere.`,
    purchaseLink: null,
    featured: false
  }
};

const authors = {
  1: {
    id: 1,
    name: `Tarek Fateh`,
    picture: tarek,
    about: "lorem Ipsum",
    books: [1, 2, 3],
    birthdate: "31 march 2019",
    birthplace: "Mumbai, India",
    quote: "something something"
  }
};
