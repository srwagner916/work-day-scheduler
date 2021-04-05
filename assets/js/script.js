today = dayjs().format('dddd, MMMM D');
console.log(today);
currentTime = dayjs().format('HH');
console.log(currentTime);
//turn currentTime into integer
currentTimeInt = parseInt(currentTime);
console.log(currentTimeInt);



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
}
