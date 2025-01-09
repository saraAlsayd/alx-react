// Import jQuery, lodash, and CSS
import $ from "jquery";
import _ from "lodash";
import "../css/main.css";

// Add elements to the DOM
$('body').append('<div id="logo"></div>');
$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - ALX</p>');

// Counter function
let count = 0;
const updateCounter = () => {
  count++;
  $('#count').text(`${count} clicks on the button`);
};

// Bind debounce to button click
$('button').on('click', _.debounce(updateCounter, 300));