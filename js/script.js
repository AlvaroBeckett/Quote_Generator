// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var message = '';
var red;
var green;
var blue;
var viewedQuotes =[];
var quotes = [
	{quote: "When you reach the end of your rope, tie a knot in it and hang on.", source: "Franklin D. Roosevelt"},
	{quote: "There is nothing permanent except change.", source: "Heraclitus"},
	{quote: "Good.better.best.Never let it rest. 'Til your good is better and your better is best.", source: "St. Jerome"},
	{quote: "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down 'happy'. They told me I didn't understand the asignment, and I told them they didn't understand life.", source: "John Lennon"},
	{quote: "I never dreamed about success, I worked for it.", source: "Estee Lauder"},
	{quote: "Anyone who has never made a mistake has never tried anything new.", source: "Albert Einstein"},
	{quote: "Doubt kills more dreams that failure ever will.", source: "Karim Seddiki"},
	{quote: "Don't cry because it's over, smile because it happened.", source: "Dr. Seuss"},
	{quote: "Be yourself; everyone else is already taken.", source: "Oscar Wilde"},
	{quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", source: "Albert Einstein"},
	{quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.", source: "William W. Purkey"},
	{quote: "You only live once, but if you do it right, once is enough.", source: "Mae West"},
	{quote: "In three worlds I can sum up everything I've learned about life: it goes on.", source: "Robert Frost"},
	{quote: "Be the change that you wish to see in the world.", source: "Mahatma Gandhi"},
	{quote: "Don't walk in front of me... I may not follow. Don't walk behind me... I may not lead. Walk beside me... just be my friend.", source: "Albert Camus"},
	{quote: "If you tell the truth, you don't have to remember anything", source: "Mark Twain"},
	{quote: "Without music, life would be a mistake.", source: "Frriedrich Nietzsche, Twilight of the Idols"},
	{quote: "Instanity is doing the same thing, over and over again, but expecting different results.", source: "Narcotics Anonymous"},
];

function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}
// Function to get a random object from quotes array and store in variable randomQuote
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);
	
	var splicedQuote = quotes.splice(randomQuote, 1)[0];
	viewedQuotes.push(splicedQuote);
	if ( quotes.length === 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return splicedQuote;
}

//Function to genereate random rgb color value
function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 100 );
	green = Math.floor(Math.random() * 100 );
	blue = Math.floor(Math.random() * 100 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}



// Function to take previously selected random object from array & print to screen
function printQuote() {
	// On click event, function printQuote runs, then fires the getRandomQuote function
	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	message  += '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';	
	} else {
		message += '';
	}
	if ( quotes.tags ) {
		message += '<h3>' + quotes.tags + '</h3>';
	} else {
		message += '';
	}
	print(message);
	//Generate random color
	randomColorGenerator();
	//Update background with new random color
	document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();
}