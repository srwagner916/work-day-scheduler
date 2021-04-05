today = dayjs().format('dddd, MMMM D');
console.log(today);
currentTime = dayjs().format('HH');
console.log(currentTime);
//turn currentTime into integer
currentTimeInt = parseInt(currentTime);
console.log(currentTimeInt);
var textAreaNine = $('#nineTextArea')
var textAreaTen = $('#tenTextArea')
var textAreaEleven = $('#elevenTextArea')
var textAreaTwelve = $('#twelveTextArea')
var textAreaOne = $('#oneTextArea')
var textAreaTwo = $('#twoTextArea')
var textAreaThree = $('#threeTextArea')
var textAreaFour = $('#fourTextArea')
var textAreaFive = $('#fiveTextArea')


hoursArr = [9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17];
console.log(hoursArr);

textAreaArr = [$('#nineTextArea'),
               $('#tenTextArea'),
               $('#elevenTextArea'),
               $('#twelveTextArea'),
               $('#oneTextArea'),
               $('#twoTextArea'),
               $('#threeTextArea'),
               $('#fourTextArea'),
               $('#fiveTextArea')]

saveBtnArr = [$('#nineBtn'),
              $('#tenBtn'),
              $('#elevenBtn'),
              $('#twelveBtn'),
              $('#oneBtn'),
              $('#twoBtn'),
              $('#threeBtn'),
              $('#fourBtn'),
              $('#fiveBtn'),];

             

// Display today's date on page
$('#currentDay').text(today);

//color code the time blocks
for(i=0; i<hoursArr.length; i++){
  if (currentTimeInt === hoursArr[i]) {
    textAreaArr[i].addClass('present');
  }
  else if(currentTimeInt > hoursArr[i]) {
    textAreaArr[i].addClass('past');
  }
  else if(currentTimeInt < hoursArr[i]) {
    textAreaArr[i].addClass('future')
  }
};

//save button eventlisteners
$('#nineBtn').on('click', function(){
  localStorage.setItem('nine oclock task', textAreaNine.val())
})

var loadTasks = function(){
  textAreaNine.val(localStorage.getItem('nine oclock task'));
}

loadTasks();
  
