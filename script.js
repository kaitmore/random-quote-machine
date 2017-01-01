function getRandomNum(x){
  return Math.floor((Math.random() * x.length));
}

function displayQuote(quoteLocation, sourceLocation, data, x){
  
var display = quoteLocation.html( "<blockquote>" + data[x].content + "&nbsp" + "- " + data[x].title + "<br><br></blockquote>");
var source =  sourceLocation.html("<a href = '" + data[x].link + "' " + "alt='" + data[x].ID + "'>"+ "Source" + "</a>");
return display, source;
}

$(document).ready(function() {
  //Grabs JSON
  $.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40', function(data) {
  //Gets a random number with length of data as a parameter
var x = getRandomNum(data);
 //sets quote and source link div locations
var quoteLocation = $('#quotetext');
var sourceLocation = $('#source');
 //calls function to display quote
displayQuote(quoteLocation, sourceLocation, data, x);

});
 //Array of background colors
  var colors = ['#e0d6ff', '#c3d8ff', '#95ffd8', '#abf7ff', '#aabdff', '#ffb7fb',
'#ea9eff',
'#d292ff',
'#ac91ff', '#ceffa6',
'#e2ffac',
'#a0c997',
'#7ddfb4',
'#56ddc6'],
    color;
 //Clicking "Get Quote" button
  $('#getQuote').click(function() {
//Get a random background color
    var randColor;
    do {
      randColor = colors[Math.floor(Math.random() * colors.length)];
    } while (color == randColor);
    $('body').css('background-color', randColor);
      color = randColor;
 //Get JSON info after clicking Get Quote by calling displayQuote again
   $.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40', function(data) {
  
var x = getRandomNum(data);
var quoteLocation = $('#quotetext');
var sourceLocation = $('#source');
displayQuote(quoteLocation, sourceLocation, data, x);
  
  });
  
//Dynamically update Twitter button with new content on click

   var linkElement = document.getElementById("tweet-this-post");
$(linkElement).click(function(event){
var getQuote = document.getElementById("quotetext").children[0].innerText;
  event.preventDefault();

  var tweetedLink = window.location.origin + window.location.pathname;

  window.open("http://twitter.com/intent/tweet?url=&text=" + getQuote + "&via=kaitlinjane&", "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
  
  
    });
  
});
  
  });