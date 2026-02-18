const questions = [
  // ===================== Football (10) =====================
  {
    id: 1,
    question: "Which country won the 2018 FIFA World Cup?",
    answers: ["Germany", "Brazil", "France", "Argentina"],
    correct: 2,
    category: "Football",
    isisMarked: false,
    userAnswer: null,
  },

  {
    id: 2,
    question: "How many players are on the field for one team?",
    answers: ["9", "10", "11", "12"],
    correct: 2,
    category: "Football",
    isMarked: false,
    userAnswer: null,
  },

  {
    id: 3,
    question: "Which club does Lionel Messi play for (2024)?",
    answers: ["Barcelona", "PSG", "Inter Miami", "Man City"],
    correct: 2,
    category: "Football",
    isMarked: false,
    userAnswer: null,
  },

  // {
  //   id: 4,
  //   question: "Which country has won the most World Cups?",
  //   answers: ["Italy", "Germany", "Brazil", "Argentina"],
  //   correct: 2,
  //   category: "Football",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 5,
  //   question: "Match duration?",
  //   answers: ["80 min", "90 min", "100 min", "120 min"],
  //   correct: 1,
  //   category: "Football",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 6,
  //   question: "The Red Devils is nickname of?",
  //   answers: ["Liverpool", "Arsenal", "Manchester United", "Chelsea"],
  //   correct: 2,
  //   category: "Football",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 7,
  //   question: "Ballon d'Or 2023 winner?",
  //   answers: ["Mbappe", "Messi", "Haaland", "Modric"],
  //   correct: 1,
  //   category: "Football",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 8,
  //   question: "2022 World Cup host?",
  //   answers: ["Russia", "Qatar", "USA", "Brazil"],
  //   correct: 1,
  //   category: "Football",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 9,
  //   question: "CR7 refers to?",
  //   answers: ["Ronaldinho", "Cristiano Ronaldo", "Rivaldo", "Rooney"],
  //   correct: 1,
  //   category: "Football",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 10,
  //   question: "Most UCL titles club?",
  //   answers: ["Barcelona", "AC Milan", "Real Madrid", "Bayern"],
  //   correct: 2,
  //   category: "Football",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // ===================== Technology (10) =====================
  // {
  //   id: 11,
  //   question: "HTML stands for?",
  //   answers: [
  //     "Hyper Text Markup Language",
  //     "High Tech ML",
  //     "Home Tool ML",
  //     "Hyperlinks ML",
  //   ],
  //   correct: 0,
  //   category: "Technology",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 12,
  //   question: "JavaScript was created by?",
  //   answers: ["Microsoft", "Netscape", "Google", "Apple"],
  //   correct: 1,
  //   category: "Technology",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 13,
  //   question: "CSS stands for?",
  //   answers: [
  //     "Computer Style Sheets",
  //     "Creative Style",
  //     "Cascading Style Sheets",
  //     "Color Sheets",
  //   ],
  //   correct: 2,
  //   category: "Technology",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 14,
  //   question: "Language that runs in browser?",
  //   answers: ["Python", "Java", "C++", "JavaScript"],
  //   correct: 3,
  //   category: "Technology",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 15,
  //   question: "Windows created by?",
  //   answers: ["Apple", "Microsoft", "IBM", "Google"],
  //   correct: 1,
  //   category: "Technology",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 16,
  //   question: "Git is used for?",
  //   answers: ["Design", "Version control", "Editing", "Gaming"],
  //   correct: 1,
  //   category: "Technology",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 17,
  //   question: "Android owned by?",
  //   answers: ["Google", "Samsung", "Apple", "Microsoft"],
  //   correct: 0,
  //   category: "Technology",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 18,
  //   question: "CPU stands for?",
  //   answers: [
  //     "Central Process Unit",
  //     "Central Processing Unit",
  //     "Computer PU",
  //     "Control PU",
  //   ],
  //   correct: 1,
  //   category: "Technology",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 19,
  //   question: "JavaScript framework?",
  //   answers: ["Laravel", "Django", "React", "Flask"],
  //   correct: 2,
  //   category: "Technology",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 20,
  //   question: "API stands for?",
  //   answers: [
  //     "Application Programming Interface",
  //     "Applied Internet",
  //     "Advanced Input",
  //     "App Process",
  //   ],
  //   correct: 0,
  //   category: "Technology",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // // ===================== Literature (10) =====================
  // {
  //   id: 21,
  //   question: "Romeo and Juliet author?",
  //   answers: ["Dickens", "Shakespeare", "Twain", "Homer"],
  //   correct: 1,
  //   category: "Literature",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 22,
  //   question: "1984 author?",
  //   answers: ["Orwell", "Hemingway", "Tolstoy", "Hugo"],
  //   correct: 0,
  //   category: "Literature",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 23,
  //   question: "Pride and Prejudice author?",
  //   answers: ["Jane Austen", "Bronte", "Rowling", "Christie"],
  //   correct: 0,
  //   category: "Literature",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 24,
  //   question: "The Old Man and the Sea author?",
  //   answers: ["Hemingway", "Orwell", "Shakespeare", "Dostoevsky"],
  //   correct: 0,
  //   category: "Literature",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 25,
  //   question: "Harry Potter author?",
  //   answers: ["Tolkien", "Rowling", "Dan Brown", "Lewis"],
  //   correct: 1,
  //   category: "Literature",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 26,
  //   question: "The Great Gatsby author?",
  //   answers: ["Fitzgerald", "Hemingway", "Orwell", "Steinbeck"],
  //   correct: 0,
  //   category: "Literature",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 27,
  //   question: "Crime and Punishment author?",
  //   answers: ["Tolstoy", "Dostoevsky", "Chekhov", "Pushkin"],
  //   correct: 1,
  //   category: "Literature",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 28,
  //   question: "The Hobbit author?",
  //   answers: ["Tolkien", "Lewis", "Rowling", "Martin"],
  //   correct: 0,
  //   category: "Literature",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 29,
  //   question: "Les Miserables author?",
  //   answers: ["Victor Hugo", "Voltaire", "Balzac", "Zola"],
  //   correct: 0,
  //   category: "Literature",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 30,
  //   question: "Animal Farm author?",
  //   answers: ["Orwell", "Huxley", "Kafka", "Homer"],
  //   correct: 0,
  //   category: "Literature",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // // ===================== History (10) =====================
  // {
  //   id: 31,
  //   question: "WWII ended in?",
  //   answers: ["1943", "1945", "1950", "1939"],
  //   correct: 1,
  //   category: "History",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 32,
  //   question: "First US president?",
  //   answers: ["Lincoln", "Washington", "Jefferson", "Adams"],
  //   correct: 1,
  //   category: "History",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 33,
  //   question: "Pyramids located in?",
  //   answers: ["Mexico", "Peru", "Egypt", "India"],
  //   correct: 2,
  //   category: "History",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 34,
  //   question: "Discovered America?",
  //   answers: ["Columbus", "Magellan", "Cook", "Da Gama"],
  //   correct: 0,
  //   category: "History",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 35,
  //   question: "Iron Lady?",
  //   answers: ["Elizabeth", "Margaret Thatcher", "Cleopatra", "Indira Gandhi"],
  //   correct: 1,
  //   category: "History",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 36,
  //   question: "Colosseum built by?",
  //   answers: ["Greek", "Roman", "Ottoman", "Persian"],
  //   correct: 1,
  //   category: "History",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 37,
  //   question: "Great Wall country?",
  //   answers: ["Japan", "India", "China", "Korea"],
  //   correct: 2,
  //   category: "History",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 38,
  //   question: "Last Pharaoh?",
  //   answers: ["Ramses II", "Tutankhamun", "Cleopatra", "Akhenaten"],
  //   correct: 2,
  //   category: "History",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 39,
  //   question: "French Revolution year?",
  //   answers: ["1789", "1776", "1804", "1812"],
  //   correct: 0,
  //   category: "History",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 40,
  //   question: "Leader of Nazi Germany?",
  //   answers: ["Stalin", "Hitler", "Mussolini", "Churchill"],
  //   correct: 1,
  //   category: "History",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // // ===================== Movies (10) =====================
  // {
  //   id: 41,
  //   question: "Titanic director?",
  //   answers: ["James Cameron", "Spielberg", "Nolan", "Scorsese"],
  //   correct: 0,
  //   category: "Movies",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 42,
  //   question: "Iron Man belongs to?",
  //   answers: ["DC", "Marvel", "Star Wars", "Harry Potter"],
  //   correct: 1,
  //   category: "Movies",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 43,
  //   question: "Oscars 2020 Best Picture?",
  //   answers: ["Joker", "1917", "Parasite", "Ford v Ferrari"],
  //   correct: 2,
  //   category: "Movies",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 44,
  //   question: "Joker in Dark Knight?",
  //   answers: ["Phoenix", "Heath Ledger", "Leto", "Hardy"],
  //   correct: 1,
  //   category: "Movies",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 45,
  //   question: "Hogwarts in which series?",
  //   answers: ["LOTR", "Harry Potter", "Narnia", "Star Wars"],
  //   correct: 1,
  //   category: "Movies",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 46,
  //   question: "Inception director?",
  //   answers: ["Nolan", "Tarantino", "Cameron", "Scott"],
  //   correct: 0,
  //   category: "Movies",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 47,
  //   question: "Pandora planet movie?",
  //   answers: ["Avatar", "Dune", "Interstellar", "Gravity"],
  //   correct: 0,
  //   category: "Movies",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 48,
  //   question: "Jack in Titanic?",
  //   answers: ["Brad Pitt", "Leonardo DiCaprio", "Matt Damon", "Tom Cruise"],
  //   correct: 1,
  //   category: "Movies",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 49,
  //   question: "Darth Vader appears in?",
  //   answers: ["Star Trek", "Star Wars", "Matrix", "Gladiator"],
  //   correct: 1,
  //   category: "Movies",
  //   isMarked: false,
  //   userAnswer: null,
  // },

  // {
  //   id: 50,
  //   question: "Dreams inside dreams movie?",
  //   answers: ["Inception", "Tenet", "Memento", "Shutter Island"],
  //   correct: 0,
  //   category: "Movies",
  //   isMarked: false,
  //   userAnswer: null,
  // },
];
export default questions;
