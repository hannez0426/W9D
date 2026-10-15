
// Array containing 10 tweet objects
let tweets = [
    {
        tweet: "Good morning everyone!",
        username: "Anna",
        created_at: "10-01-2026",
        age: 22
    },
    {
        tweet: "I love playing video games!",
        username: "Mark",
        created_at: "10-02-2026",
        age: 16
    },
    {
        tweet: "Learning JavaScript is fun!",
        username: "Sarah",
        created_at: "10-03-2026",
        age: 25
    },
    {
        tweet: "Just finished my homework!",
        username: "James",
        created_at: "10-04-2026",
        age: 15
    },
    {
        tweet: "Coffee makes my day better!",
        username: "Emily",
        created_at: "10-05-2026",
        age: 24
    },
    {
        tweet: "Excited for the weekend!",
        username: "Daniel",
        created_at: "10-06-2026",
        age: 17
    },
    {
        tweet: "Today is a beautiful day!",
        username: "Sophia",
        created_at: "10-07-2026",
        age: 30
    },
    {
        tweet: "I love watching movies!",
        username: "Lucas",
        created_at: "10-08-2026",
        age: 14
    },
    {
        tweet: "Working on my coding project!",
        username: "Olivia",
        created_at: "10-09-2026",
        age: 19
    },
    {
        tweet: "School was fun today!",
        username: "Noah",
        created_at: "10-10-2026",
        age: 13
    }
];

// WHILE LOOP - Display tweets from users 18 and older

// Counter starting at zero
let i = 0;

console.log("Tweets from users 18 and older:");

// Loop through the tweets array
while (i < tweets.length) {

    // Check if the user is at least 18
    if (tweets[i].age >= 18) {
        console.log(tweets[i].tweet);
        console.log(tweets[i].username);
        console.log(tweets[i].created_at);
    }

    // Move to the next tweet
    i++;
}

// FOR LOOP - Display tweets from users under 18

console.log("Tweets from users under 18:");

// Loop through the tweets array
for (let j = 0; j < tweets.length; j++) {

    // Check if the user is under 18
    if (tweets[j].age < 18) {
        console.log(tweets[j].tweet);
        console.log(tweets[j].username);
        console.log(tweets[j].created_at);
    }
}
