// Constants for main button query selectors
const noun1Btn = document.getElementById("noun1");
const verbBtn = document.getElementById("verb");
const adjectiveBtn = document.getElementById("adjective");
const noun2Btn = document.getElementById("noun2");
const settingBtn = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Variables for pre-defined arrays
const nouns1 = ["cat", "dog", "rabbit", "bird"];
const verbs = ["runs", "jumps", "eats", "sleeps"];
const adjectives = ["big", "small", "furry", "friendly"];
const nouns2 = ["house", "tree", "car", "ball"];
const settings = ["park", "beach", "forest", "mountain"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions */

// Function to display a word in the specified element
function displayWord(word, element) {
    element.textContent = word;
}

// Function to generate a random word from the given array
function generateRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to update the count for each array to cycle through elements
function updateWordCounts() {
    // Incrementing the count and ensuring it wraps around when reaching the array length
    noun1Count = (noun1Count + 1) % nouns1.length;
    verbCount = (verbCount + 1) % verbs.length;
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
    noun2Count = (noun2Count + 1) % nouns2.length;
    settingCount = (settingCount + 1) % settings.length;
}

/* Event Listeners */

// Event listener for noun1 button
noun1Btn.addEventListener("click", () => {
    // Generating a random noun1 and displaying it
    const randomNoun1 = generateRandomWord(nouns1);
    displayWord(randomNoun1, choosenNoun1);
    // Updating the count for noun1
    updateWordCounts();
});

// Event listener for verb button
verbBtn.addEventListener("click", () => {
    // Generating a random verb and displaying it
    const randomVerb = generateRandomWord(verbs);
    displayWord(randomVerb, choosenVerb);
    // Updating the count for verb
    updateWordCounts();
});

// Event listener for adjective button
adjectiveBtn.addEventListener("click", () => {
    // Generating a random adjective and displaying it
    const randomAdjective = generateRandomWord(adjectives);
    displayWord(randomAdjective, choosenAdjective);
    // Updating the count for adjective
    updateWordCounts();
});

// Event listener for noun2 button
noun2Btn.addEventListener("click", () => {
    // Generating a random noun2 and displaying it
    const randomNoun2 = generateRandomWord(nouns2);
    displayWord(randomNoun2, choosenNoun2);
    // Updating the count for noun2
    updateWordCounts();
});

// Event listener for setting button
settingBtn.addEventListener("click", () => {
    // Generating a random setting and displaying it
    const randomSetting = generateRandomWord(settings);
    displayWord(randomSetting, choosenSetting);
    // Updating the count for setting
    updateWordCounts();
});

// Concatenate the user story and display
function playback_on_click() {
    // Constructing the story using the chosen words and displaying it
    const story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} in ${choosenSetting.textContent}.`;
    document.getElementById("story").textContent = story;
}

// Event listener for playback button
document.getElementById("playback").addEventListener("click", playback_on_click);

// Generating a random story from the arrays
function random_on_click() {
    // Constructing a random story using randomly chosen words from each array and displaying it
    const randomStory = `${generateRandomWord(nouns1)} ${generateRandomWord(verbs)} ${generateRandomWord(adjectives)} ${generateRandomWord(nouns2)} in ${generateRandomWord(settings)}.`;
    document.getElementById("story").textContent = randomStory;
}

// Event listener for random button
document.getElementById("random").addEventListener("click", random_on_click);

// Dynamically adding student id/name on click
document.getElementById("studentId").textContent = "200556510/dhruv";
