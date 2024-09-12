 const smalldivs = document.querySelectorAll('.smalldiv');

 smalldivs.forEach((smalldiv)=>{
        smalldiv.addEventListener('click',()=>{
            removeActiveClasses()
            smalldiv.classList.add('active')
        })
 })
 function removeActiveClasses(){
    smalldivs.forEach(smalldiv =>{
        smalldiv.classList.remove('active')
    })
 }