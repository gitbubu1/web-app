var allElems = document.querySelectorAll(".elem");
var allFullElems = document.querySelectorAll(".fullElem");
// var allFullElemsBackBtn = document.querySelectorAll(".fullElem .back");

  // elem.addEventListener('click',function(){
  // console.log(elem);
  // console.log(document.querySelectorAll('.fullElem'),[0])
  // //
  // allElems.forEach(function (elem) {
  //   elem.addEventListener('click', function() {
  //     allFullElems[elem.id].style.display = "block";
  //   });
  // });
  // allFullElemsBackBtn.forEach(function(back){
  //   console.log('click', function);
    
  // })


// })
 

allElems.forEach(function(elem){
  elem.addEventListener('click',function() { 
  allFullElems[elem.id].style.display = 'block'
  })

})
