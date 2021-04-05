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
});

$('#tenBtn').on('click', function(){
  localStorage.setItem('ten oclock task', textAreaTen.val())
});

$('#elvenBtn').on('click', function(){
  localStorage.setItem('eleven oclock task', textAreaEleven.val())
});

$('#twelveBtn').on('click', function(){
  localStorage.setItem('twelve oclock task', textAreaTwelve.val())
});

$('#oneBtn').on('click', function(){
  localStorage.setItem('one oclock task', textAreaOne.val())
});

$('#twoBtn').on('click', function(){
  localStorage.setItem('two oclock task', textAreaTwo.val())
});

$('#threeBtn').on('click', function(){
  localStorage.setItem('three oclock task', textAreaThree.val())
});

$('#fourBtn').on('click', function(){
  localStorage.setItem('four oclock task', textAreaFour.val())
});

$('#fiveBtn').on('click', function(){
  localStorage.setItem('five oclock task', textAreaFive.val())
});









//Loading Tasks to page
var loadTasks = function(){
  textAreaNine.val(localStorage.getItem('nine oclock task'));
  textAreaTen.val(localStorage.getItem('ten oclock task'));
  textAreaEleven.val(localStorage.getItem('eleven oclock task'));
  textAreaTwelve.val(localStorage.getItem('twelve oclock task'));
  textAreaOne.val(localStorage.getItem('one oclock task'));
  textAreaTwo.val(localStorage.getItem('two oclock task'));
  textAreaThree.val(localStorage.getItem('three oclock task'));
  textAreaFour.val(localStorage.getItem('four oclock task'));
  textAreaFive.val(localStorage.getItem('five oclock task'));
}

loadTasks();
  
