
console.log("s")

const ramenMenu=document.querySelector('#ramen-menu')
const ramenDetail=document.querySelector('#ramen-detail')
// Callbacks
const handleClick = (ramen) => {
  const imagespace = document.querySelector(".detail-image")
  imagespace.src=ramen.image
  imagespace.alt=ramen.name
  const nameoframen = document.querySelector('.name')
  nameoframen.textContent = ramen.name
  const restaurant = document.querySelector('.restaurant')
  restaurant.textContent = ramen.restaurant
  const rating = document.querySelector('#rating-display')
  rating.textContent = ramen.rating
  const comment = document.querySelector('#comment-display')
  comment.textContent = ramen.comment
};


const addSubmitListener = () => {
  
  const form = document.querySelector('#new-ramen')

  form.addEventListener("submit",(e)=>{

    e.preventDefault()

    const newRamen= {
    name: e.target[`new-name`].value,
    image:e.target[`new-image`].value,
    restaurant:e.target[`new-restaurant`].value,
    rating:  e.target[`new-rating`].value,
    comment:  e.target[`new-comment`].value

   }

   const img2= document.createElement('img')
   img2.src= newRamen.image
   img2.alt= newRamen.name
   ramenMenu.append(img2)

   img2.addEventListener("click",()=>handleClick(newRamen))
   form.reset()

  })
  
}



const displayRamens = () => {
  fetch('http://localhost:3000/ramens')
  .then(response=>response.json())
  .then(ramens=>{
    ramens.forEach(ramen=>{
      const img = document.createElement('img')
      img.src = ramen.image
      img.alt = ramen.name
      ramenMenu.append(img)

      img.addEventListener("click",()=>{handleClick(ramen)})
    })
    handleClick(ramens[0]) 

  })
  
  
};



const main = () => {
  displayRamens()
  addSubmitListener()
}

main()

// Export functions for testing

// export {
// displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };
