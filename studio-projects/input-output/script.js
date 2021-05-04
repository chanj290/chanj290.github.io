// FUNCTION: Arrays for the activities category

$(document).ready(function() {

    var movie = [
        "1917",
        "6 Underground",
        "A Beautiful Mind",
        "A Quiet Place",
        "About Time",
        "Baby Driver",
        "Bad Genius",
        "Beautiful Boy",
        "Big Hero 6",
        "Bird Box",
        "Bohemian Rhapsody",
        "Brooklyn",
        "Brother of the Year",
        "Burlesque",
        "Cinema Paradiso",
        "Coco",
        "Crazy Rich Asians",
        "Dead Poets Society",
        "Death Becomes Her",
        "Django Unchained",
        "Dunkirk",
        "Fight Club",
        "Get Out",
        "Gone Girl",
        "Good Will Hunting",
        "Green Book",
        "Her",
        "Inception",
        "Inglorious Basterds",
        "Jojo Rabbit",
        "Joker",
        "Knives Out",
        "La La Land",
        "Les Misérable",
        "Mad Max Fury Road",
        "Memento",
        "Miss Congeniality",
        "Nottinghill",
        "One Day",
        "Parasite",
        "Pretty Woman",
        "Pulp Fiction",
        "Raya",
        "Taken",
        "The Blind Side",
        "The Firm",
        "The Grand Budapest Hotel",
        "The Invisible Guest",
        "The Lovebirds",
        "The Matrix",
        "The Notebook",
        "The Theory of Everything",
        "War Horse",
        "When Harry Met Sally",
        "Wonder",
        "Zootopia",

    ];

    var game = [
        "Among Us",
        "Club Penguin",
        "Skribbl.io",
        "Solitaire",
        "Codenames",
        "UNO",
        "Monopoly",
        "Jackbox",
        "Gravity Guys",
        "Fire Boy Ice Girl",
        "Moshi Monsters",
        "Poptropica",
        "Mahjong",
        "Cards Against Humanity",
        "Pokemon Go",
        "Houseparty",
        "Secret Hitler",
        "Spyfall",
        "Werewolf Telegram",
        "Psych",
        "Scrabble",
        "Trivia Night",
        "Game Pigeon",
        "Animal Crossing",
        "Mario Kart Tour",
        "Mario Party",
        "Word With Friends",
        "Draw Something",
        "8 Ball Pool",
        "Catan",
        "Scattergories",
        "Chess.com",
        "Head's Up",
        "Stay the Fuck Inside",
        "Picolo",
        "Keep Talking and Nobody Explodes",
        "Virtual Escape Room",
    ];

    var exercise = [
        "15 crunches",
        "20 crunches",
        "30 crunches",
        "10 push ups",
        "15 push ups",
        "20 push ups",
        "15 squats",
        "20 squats",
        "25 squats",
        "20 jumping jacks",
        "25 jumping jacks",
        "30 jumping jacks",
        "20 lunges",
        "30 lunges",
        "20 sec plank",
        "30 sec plank",
        "40 sec plank",
        "50 sec plank",
        "60 sec plank",
        "40 sec side plank",
        "50 sec side plank",
        "60 sec side plank",
        "10 leg raises",
        "15 leg raises",
        "20 leg raises",
        "10 tricep dips",
        "15 tricep dips",
        "20 tricep dips",
        "15 bridges",
        "20 bridges",
        "25 bridges",
        "30 arm circles",
        "40 arm circles",
        "20 burpees",
        "30 burpees",
        "40 burpees",
        "50 burpees",
    ];
   
    var day = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
    ]


// FUNCTION: generate random combo

    function select_random(x){
        y = x[Math.floor(Math.random()*x.length)];
        return y;
    }

    function generateTableRow(...entries) {
        const row = entries.map((entry) => {
            const td = document.createElement('td');
            td.textContent = entry;
            return td;
        });
        const tr = document.createElement('tr');
        tr.append(...row);
        return tr;
    }

// input value button

    let result = document.querySelector("#result");

    document.getElementById('go').addEventListener('click', () => {
        clearTable(document.getElementById('activities'));
        const numberOfDays = Number(document.getElementById('input').value);
        const tableHeader = generateTableHeader('Day', 'Movie', 'Game', 'Exercise');
        const tableRows = [...Array(numberOfDays).keys()].map((i) => generateTableRow(i + 1, select_random(movie), select_random(game), select_random(exercise)));
        document.getElementById('activities').append(tableHeader, ...tableRows);
        result.innerText = "Your activities for " + numberOfDays + " days in quarantine."
    });

// create table

    function generateTableHeader(...titles) {
        const header = entries.map((title) => {
            const th = document.createElement('th');
            th.setAttribute('scope', 'col');
            th.textContent = title;
        });
        const tr = document.createElement('tr');
        tr.append(...header);
        return tr;
    }
    function clearTable(table) {
        while (table.childNodes.length > 0) {
            table.removeChild(table.firstChild);
        }
    }

});
