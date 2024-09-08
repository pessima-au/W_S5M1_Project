function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  const widgetClass = document.querySelectorAll('div');
  widgetClass.forEach((element) => element.classList.add('widget'));

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  console.log(quotes);

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex]
  const quoteOfTheDayText = document.createElement('div');
  quoteOfTheDayText.innerText = randomQuote.quote;

  const authorAndDate = randomQuote.date ?
  `${randomQuote.author} in ${randomQuote.date}` :
  `${randomQuote.author} in an unknown date`;

  const quoteOfTheDayDiv = document.querySelector('.quoteoftheday');
  quoteOfTheDayDiv.insertAdjacentElement('beforeend', quoteOfTheDayText);

  
  
  const quoteofthedayAuthor = document.createElement('div');
  quoteofthedayAuthor.innerText = authorAndDate;
  quoteOfTheDayText.insertAdjacentElement('afterend', quoteofthedayAuthor)
  

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  const corporateSpeakParagraph = document.createElement('p');

  function getRandomWords(array) {
  const randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex];
}
const sentence = `We need to ${getRandomWords(verbs)} our ${getRandomWords(nouns)} ${getRandomWords(adverbs)} in order to ${getRandomWords(verbs)} our ${getRandomWords(nouns)} ${getRandomWords(adverbs)}.`

corporateSpeakParagraph.innerText = sentence;

const corporateSpeakDiv = document.querySelector('.corporatespeak');
corporateSpeakDiv.insertAdjacentElement('beforeend', corporateSpeakParagraph)


  // 👉 TASK 4 - Build a "Countdown" widget
  const countdownDiv = document.querySelector('.countdown');
  const CountdownParagraph = document.createElement('p');

  countdownDiv.insertAdjacentElement('beforeend', CountdownParagraph);
  
  const messages = [
    "T-minus 5...",
    "T-minus 4...",
    "T-minus 3...",
    "T-minus 2...",
    "T-minus 1...",
    "Liftoff! 🚀"
  ]
  
  let index = 0;
  const intervalId = setInterval(() => {
    CountdownParagraph.innerText = messages[index];
    index++;
    if (index === messages.length) {
      index = 0;
      clearInterval(intervalId);
    }
  }, 1000);




  // 👉 TASK 5 - Build a "Friends" widget
  const friendsParagraph = document.createElement('p');

 

    const randomPerson = people[Math.floor(Math.random() * people.length)];
    const birthYear = new Date(randomPerson.dateOfBirth).getFullYear();

    const friendList = randomPerson.friends.map(friendId => {
      const friend = people.find(person => person.id === friendId);
      return `${friend.fname} ${friend.lname}`;
    })

    let  finalSentence;
    if (friendList.length === 0) {
      finalSentence = `${randomPerson.fname} ${randomPerson.lname} was born in ${birthYear} and has no friends.`
    } else if (friendList === 1) {
      finalSentence = `${randomPerson.fname} ${randomPerson.lname} was born in ${birthYear} and is friends with ${friendList[0]}.`
    } else {
      const lastFriend = friendList.pop()
      finalSentence = `${randomPerson.fname} ${randomPerson.lname} was born in ${birthYear} and is friends with ${friendList.join(',')} and  ${lastFriend}.`
    }
   
  
  
  

  friendsParagraph.innerText = finalSentence;
  const friendsDiv = document.querySelector('.friends');
  friendsDiv.insertAdjacentElement('beforeend', friendsParagraph);
 
   
  

  // 👉 TASK 6 - Make it so user can tab through the widgets
  const tabIndex1 = document.querySelector('div:nth-of-type(1)');
  tabIndex1.setAttribute('tabIndex', '1')

  const tabIndex2 = document.querySelector('.corporatespeak');
  tabIndex2.setAttribute('tabIndex', '2')

  const tabIndex3 = document.querySelector('div:nth-of-type(3)');
  tabIndex3.setAttribute('tabIndex', '3')

  const tabIndex4 = document.querySelector('div:nth-of-type(4)');
  tabIndex4.setAttribute('tabIndex', '4')


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
