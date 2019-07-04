import tarek from "../images/authors/tarekFatah.jpg";
import mahatma from "../images/bookCovers/An_Hour_With_The_Mahatma_grande.jpg";
import astro from "../images/bookCovers/Astromentoring_Front_cover_grande.jpg";
import good from "../images/bookCovers/Being_good_Front_Cover_grande.jpg";
import born from "../images/bookCovers/Born_on_a_Tuesday_grande.jpg";
import brahm from "../images/bookCovers/Brahmacharya_Yoga_grande.jpg";
import lashkar from "../images/bookCovers/Call_for_transnational_Jihad_Lashkar_e_Taiba_1985_2014_grande.jpg";
import chase from "../images/bookCovers/Chasing_Indias_Demographic_Dividend_grande.jpg";
import chip from "../images/bookCovers/Chip_in_the_Madrasa_grande.jpg";
import communication from "../images/bookCovers/Communication_Civilization_grande.jpg";
import easy from "../images/bookCovers/Easy_Motion_Tourist_grande.jpg";
import woman from "../images/bookCovers/Empowerment_of_Women_in_India_grande.jpg";
import fault21 from "../images/bookCovers/fault21.jpg";
import fault22 from "../images/bookCovers/fault22.jpg";
import dictionary from "../images/bookCovers/Final_Dictionary_grande.jpg";
import order from "../images/bookCovers/Front_2f757a74-05f7-45ef-b350-5f3655e83cc5_grande.jpg";
import fault23 from "../images/bookCovers/front_Faultlines_23_grande.jpg";
import pilgrimage from "../images/bookCovers/Front_Pilgrimage_To_Nowhere_grande.jpg";
import global from "../images/bookCovers/Globalized_India_Contemporary_Dialogue_grande.jpg";
import yoga from "../images/bookCovers/Grihastha_Yoga_grande.jpg";
import china from "../images/bookCovers/India_and_China_Negotiating_Spaces_in_the_Narratives_grande.jpg";
import hindu from "../images/bookCovers/Is_Hindu_A_Dying_Race_grande.jpg";
import maya from "../images/bookCovers/Maya_is_reality_Front_cover_grande.jpg";
import atlantique from "../images/bookCovers/Pakistans_Atlantique_Attack_and_Arbitration_grande.jpg";
import deceit from "../images/bookCovers/The_Great_Deceit_at_Dawn_grande.jpg";
import pashtun from "../images/bookCovers/The_Real_Pashtun_Question_PB_grande.jpg";
import speechless from "../images/bookCovers/The_Speechless_and_other_Stories_grande.jpg";
import illusion from "../images/bookCovers/The_Tragic_Illusion_of_an_Islamic_State_grande.jpg";
import yoga2 from "../images/bookCovers/Vaanprastha_Yoga_grande.jpg";

export const authors = {
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

export const books = {
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
  },
  11: {
    bookId: 11,
    coverImage: woman,
    name: `Empowerment of Women in India`,
    price: 325,
    language: "english",
    genre: [],
    author: "H. Lalnunmawii",
    description: `The book ‘Empowerment of Women in India’ has been written by H.Lalnunmawii. The book mentions how the woman is adored like a goddess and preceptor of mankind in the one hand but on the other hand she is neglected, devoid of all facilities or necessities of life. This book minutely deals with these issues and enlightens the masses on the emancipation of women by way of the empowerment of women through education, career of women, empowerment of women through participation in politics, through entrepreneurship, through legislation and so on. The author further mentions if the entire world in general and India in particular wishes to rest in social peace and tranquility, then the empowerment of women is most essential for establishment of socially justifiable polity in India by providing all kinds of freedom & legitimate rights.`,
    purchaseLink: null,
    featured: false
  },
  12: {
    bookId: 12,
    coverImage: fault22,
    name: `Faultlines | Volume 22`,
    price: 250,
    language: "english",
    genre: [],
    author: "K.P.S. Gill",
    description: `The terrorist enterprise in the South Asian neighbourhood and beyond appears to be unravelling, but a new dynamic of destabilization is evolving. The collapse of global equations of power is at the heart of this emerging and potential strife, with marginalized players as well as a few ambitious runts seeking to occupy what are perceived as vacated spaces. Faultlines examines the dynamics of some surviving source of strife.`,
    purchaseLink: null,
    featured: false
  },
  13: {
    bookId: 13,
    coverImage: fault21,
    name: `Faultlines | Volume 21`,
    price: 250,
    language: "english",
    genre: [],
    author: "K.P.S. Gill",
    description: `The periodical ‘faultlines’ focuses attention on various types of sources and aspects of the existing and surfacing conflicts in and around the Indian subcontinent. Wars of low-intensity and terrorism, political violence, caste, communal and organized crime, policing, criminal justice system and human rights constitute is hub/focus of this journal. Furthermore, it focuses on the new way and instruments of warfare that are producing a randomization and dispersal of power as the governments fail to respond. The book examines these challenges in an enduring effort to bring about seasoned reasons on the sources and dynamics of conflicts.`,
    purchaseLink: null,
    featured: false
  },
  14: {
    bookId: 14,
    coverImage: global,
    name: `Globalized India: Contemporary Dialogue`,
    price: 750,
    language: "english",
    genre: [],
    author: "Archana Sudesh Methew & Tripti Mishra",
    description: `In this book, ‘Globalized India’, the editors have focused on how environment influences as the man is a sensitive being. The changes, that have taken place in the field of information and technology, have been identified as facilitator of globalization. The book mentions that there are four dimensions of globalization. The book further mentions that globalization has emerged out of difficult historical process and they became a reality through the institutions like WTO, WB, IMF and MNCS. It has reduced the power of state at a global level.`,
    purchaseLink: null,
    featured: false
  },
  15: {
    bookId: 15,
    coverImage: yoga,
    name: `Grihastha Yoga`,
    price: 100,
    language: "english",
    genre: [],
    author: "Anuradha G",
    description: `The book ‘Grihastha Yoga’ has been written by Anuradha Goray. The author warns the readers how the vicious cycle due to the time constraints, declines our health progressively. It does not mean that we should always keep vigil eyes on health and ignore our duties. She therefore, advice that life of an individual either men or women is utmost important. So when wrong diet is taken, it causes accumulation of fat on the hips and waists and if not corrected, it can cause obesity which could be one of the causes of infertility in young women. So yoga has all-round effect as it works on the physical, mental, emotional and spiritual level.`,
    purchaseLink: null,
    featured: false
  },
  16: {
    bookId: 16,
    coverImage: china,
    name: `India and China: Negotiating Spaces in the Narratives`,
    price: 995,
    language: "english",
    genre: [],
    author: "Manan Dwivedi",
    description: `The authors of this book have made a sincere and herculean efforts to answer the question - What is the legal basis of the claims of India and China on the disputed boundaries beyond the jingoistic drum beating in both the countries? What is the real issue of Tibet from the governance.

    viewpoint? What did India and China learn from each other over centuries being the two ancient civilizations. This book is a must-read book for those who wish to delve deep into India-China relations. The book deals with India-China trajectory via the contests and confluences of history and geography.`,
    purchaseLink: null,
    featured: false
  },
  17: {
    bookId: 17,
    coverImage: hindu,
    name: `Is Hindu A Dying Race?`,
    price: 250,
    language: "english",
    genre: [],
    author: "Rakesh Sinha",
    description: `This is a book by a renowned thinker and ideologue of R.S.S. Dr. Rakesh Sinha. He has chosen three books for his work on the alarming issue of decreasing population of Hindus in comparison with that of Muslims. These books are Hindus - A dying Race by Col. U.N. Murkherji (a collection of his letters in 1912), Hindu Sangathan – A savior of dying Race by Swami Shradhanand and self-abnegation in politics by R.B. Lachand. While Col. Mukherjee takes a note of population issue in Bengal, at the same time, Swami Shradhanand and R.B. Lalchand have dealt with this issue in Punjab. The book contains a long prologue by Dr. Sinha, in which he explains the rationale behind choosing these books. The book gives a very clear picture of effects of population imbalance on the Indian society.`,
    purchaseLink: null,
    featured: false
  },

  18: {
    bookId: 18,
    coverImage: maya,
    name: `Maya Is Reality`,
    price: 220,
    language: "english",
    genre: [],
    author: "Dr. Alok Bajpai",
    description: `What is real? Ever since thought emerged the human mind has been trying to answer this eternal question through Metaphysics, Religion, Science, Literature etc. This book analyzes, synthesizes and attempts to propose a new answer to this in a Series of essays, written over a period, from a perspective of a Psychiatrist whose mind delves in multiple disciplines, all converging on the possibilities of human mind. It hovers on the interface of the observed real and the hidden truth within the enigma called brain, in the process challenging many a closely held beliefs.`,
    purchaseLink: null,
    featured: false
  },
  19: {
    bookId: 19,
    coverImage: order,
    name: `The Fragility of Order: Essays in Honour of K.P.S. Gill`,
    price: 2425,
    language: "english",
    genre: [],
    author: "Ajai Sahni",
    description: `K.P.S. Gill's imprint on the history of counter-terrorism is incomparable. The comprehensive defeat he inflicted on Khalistani terrorism in the Punjab and his contributions to policing in regions of widespread disorder were exceptional, exemplary. He encapsulated the masterful strategic approach to terrorism and crisis policing as no other leader has in recent history.

    The volume is an effort to honour K.P.S. Gill by keeping under continuous and rigorous scrutiny the many issues on which his career and his mind were focused. It brings together leading commentators and exceptional international scholarship on a wide range of contemporary issues relating to ongoing and emerging challenges of security in the increasingly uncertain global context.`,
    purchaseLink: null,
    featured: false
  },
  20: {
    bookId: 20,
    coverImage: lashkar,
    name: `Lashkar-e-Taiba 1985-2014`,
    price: 499,
    language: "english",
    genre: [],
    author: "Arif Jamal",
    description: `Lashkar-e-Taiba, also known as LeT is a jihadi terrorist group sponsored by Pakistan’s intelligence agency ISI. ISI is a Pakistan Government and Army’s protégé. Hafiz Saeed is LeT head and a bounty of US $ 1 million is on his head. The book further gives information that the organization has killed 14,369 Indian soldiers between years 1990 and 2001. LeT is responsible for the infamous 26/11 Mumbai terrorist attacks in which 183 innocent civilians were killed. It has made inroads in Sri Lanka, Nepal, Bangladesh, Maldives and Myanmar. It boasts of demolishing more than 550 Hindu temples. It has a strong relationship with Dawood Ibrahim.`,
    purchaseLink: null,
    featured: false
  },
  21: {
    bookId: 21,
    coverImage: atlantique,
    name: `Pakistan's Atlantique Attack & Arbitration`,
    price: 199,
    language: "english",
    genre: [],
    author: "Priyajit Debsarkar",
    description: `The book ‘Pakistan’s Altantique: Attack & Arbitration’ has been written by Priyaji Debasarkar. This is the true story of shooting down of a Pakistan’s surveillance aircraft named Atlantique by Indian fighter plane. This book begins with a brief assessment of the technical specification of Altantique aircraft. It evaluates operational and attack capabilities of the aircraft. Why despite its comprehensive defeat at the Kargil height the Pakistan Airforce venturned into Indian airspace for a classic mission? This book deals with a chain of events as they happened on the 10th August, 1999. The book mentions a minute by minute analysis since the time the Pakistan Air force’s Naval wing, Atlantique Aircraft took off from the base in Karachi and flew into Indian Air field.`,
    purchaseLink: null,
    featured: false
  },

  22: {
    bookId: 22,
    coverImage: deceit,
    name: `The Great Deceit at Dawn`,
    price: 299,
    language: "english",
    genre: [],
    author: "Mrs. Anushree Mukherjee",
    description: `The book ‘The Great Deceit at Dawn’ is authored by Mrs Anushree Mukherjee. The author says that India got full independence from her coloniser, but it was just a ‘transfer of power’ from the British elite to the Indian elite. The author further remarks that Mr. Nehru was not the natural and democratic choice of the people - but the people’s choice were either Sardar Patel or Acharya Kripalani. The author has explicitly mentioned why Nathuram Godse killed Mahatma Gandhi. The emergence of BJP as a nationalistic political force against the forces trying to vivisect India with imported foreign ideologies has been well described in the book.`,
    purchaseLink: null,
    featured: false
  },
  23: {
    bookId: 23,
    coverImage: pashtun,
    name: `The Real Pashtun Question`,
    price: 199,
    language: "english",
    genre: [],
    author: "Dr. Farhat Taj",
    description: `The book ‘The Real Pashtun Question’ is written by Dr. Farhat Taj. The author draws attention towards how to control misogyny, religious extremism and paedophilia. The book draws attention on the Pashtun land and how it is beset by barbaric conflict for over three decades and devastating the life and properties of the Pashtun. The author suggests that the Pashtun must introspect their own weaknesses that have paved the way to be exploited by Pakistan, Saudi Arabia, Al-Qaeda or US, etc. The book unravels the mystery of commodification and subordination of women and raises the voice against this system.`,
    purchaseLink: null,
    featured: false
  },
  24: {
    bookId: 24,
    coverImage: speechless,
    name: `The Speechless and other Stories`,
    price: 125,
    language: "english",
    genre: [],
    author: "Dr. Subhash Sharma",
    description: `This is the story collection. Different stories of human life have been presented skillfully in different stories. In the stories, the name of the book has been kept as unmanifest by making the basis of the female characters which are seen as unimaginable. In modern India, there are political situations in rural areas and how they exploit the emerging elements of oppression`,
    purchaseLink: null,
    featured: false
  },
  25: {
    bookId: 25,
    coverImage: illusion,
    name: `The Tragic Illusion of an Islamic State`,
    price: 299,
    language: "english",
    genre: [],
    author: "Tarek Fatah",
    description: `The book ‘The Tragic Illusion of an Islamic State’ is authored by Tarek Fateh. The book starts with the condition of Muslim world that reveals a diseased or blighted landscape. The author argues that Islam has been hijacked by the Islamists who interpret the Quran and prophet Muhammad for their own political gain and not for the divine. The author further argues that Quran did not prescribe that Islam should take a political form, for example, the emergence of Islamic Republic of Pakistan in 1947. Islam was spiritual and once it wore the hall mark of mathematics, science, literature and music embracing ancient knowledge from India and Greece. In a global movement, Islamists continue to establish Islamic state and are ready to sacrifice for the cause which is deeply rooted in delusion and deceit.`,
    purchaseLink: null,
    featured: false
  },
  26: {
    bookId: 26,
    coverImage: yoga2,
    name: `Vaanprastha Yoga`,
    price: 100,
    language: "english",
    genre: [],
    author: "Anuradha G",
    description: `The book ‘Vaanprastha Yoga’ has been written by Anuradha Goray. The author mentions that in the third stage of human life an individual is supposed to give up or handover his household duties and responsibilities to his next generation, chiefly his son. If someone leads a life with discipline, determination and detachment, this third stage of life will not be a challenge. The author suggests that practicing yoga Asanas and Pranayams will help the body sustain itself in this third stage of life. The author further suggests that an early morning walk followed by a healthy nutrition breakfast is a must. The book further adds when parikarmas, i.e. Maitri, Karrena, Mudila and Upeksha or friendliness, compassion, enjoyment and benevolence are practiced, life becomes joyful and makes transition to the next phase that is sanyas or ascetism.`,
    purchaseLink: null,
    featured: false
  },
  27: {
    bookId: 27,
    coverImage: pilgrimage,
    name: `Pilgrimage To Nowhere`,
    price: 175,
    language: "english",
    genre: [],
    author: "Siddharth Pandey",
    description: `Coming of age is not a grand journey but a wander in doubt, a series of thoughts more than choices. The boy had captured his picture-perfect image of success, a moment in time to live his whole life in, but found his ideals and ideal future unraveled by the fascination of a life he never experienced. 
    The old man, troubled by the harsh reality of his own death and fooled by being in the past, found himself trying to play God in his search for immortality through his work, or through the choices of the boy. Leading the boy astray to a place foreign in a life he has already lived, he begins to doubt his own past, the realities of his action and ideas of immortality.
    Together on a graduation trip to find the big break, the answer to it all, they realize that life is, rather than thoughts, a series of choices not entirely made by themselves, with destiny always hiding round the corner.`,
    purchaseLink: null,
    featured: false
  },
  28: {
    bookId: 28,
    coverImage: fault23,
    name: `Faultlines | Volume 23`,
    price: 250,
    language: "english",
    genre: [],
    author: "K. P. S . Gill",
    description: `In a fractious and rapidly transforming world order, consensus is breaking down at every level, and across nearly all issues. The most fundamental values, long held to be 'self-evident', are disintegrating, even as a resurgence of noxious ideologies afflicts the entire globe. As uncertainties multiply, fear rules, and people are driven into ancient attitudes of tribalism and hate. 
    This volume explores themes that tread ambiguous and contested ground, challenging the established narrative between conflicting perspectives, attempting to bring some clarity to issues that have long been intentionally obscured, exploring the only process available to humankind to move from darkness into the light.`,
    purchaseLink: null,
    featured: false
  }
};
