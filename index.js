// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i])
  }
  return arr;
}

function johnLennonFacts(facts){
  let n = 0
  let arr1 = [];
  while(n < facts.length){
    arr1.push(facts[n] + '!!!')
    n++;
  }
  return arr1;
}

function iLoveTheBeatles(num){
  var arry = "";
  var i = 0;
  do { 
    arry += "I love the Beatles!" + i;
    i ++;
  } while (i < 15)
return arry;
  
}
