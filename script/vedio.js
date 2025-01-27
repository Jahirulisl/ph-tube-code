// fetch lode and show categorites on html

//create loadcatagries function
const loadCategories =() => {
    //fetch data 
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=> displayCategories(data.categories))
    .catch((error) => console.log(error));
};

       // object catagary thaka copy kora just raklam
// {
//     "category_id": "1001",
//     "category": "Music"
//   }


// create displaycategories function

const displayCategories = (categories) => {
    const catagoriesContainer = document.getElementById('categories')
    categories.forEach((item) =>{
     console.log(item);
       //create a button...
     const button = document.createElement("button");
        //  btn class dilam 
     button.classList = "btn";
       //btn a inner text 
     button.innerText = item.category;
       
     //add button catagoryes container..
     catagoriesContainer.append(button);
    })
};

 //lode vedios 
 const loadVideos = () => {
    //   fetch data 
  fetch(" https://openapi.programming-hero.com/api/phero-tube/videos")
   .then((res)=> res.json())
   .then((data)=> displayVideos(data.videos))
   .catch((error) => console.log(error));
   }

const displayVideos = (videos) =>{
    const videoContainer = document.getElementById('videos');

     videos.forEach(video => {
       console.log(video);
       const card = document.createElement('div');
      card.classList ="card card-compact"
      card.innerHTML = `
     <figure class="h-[200px] relative">
     <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
       ${
        video.others.posted_date?.length == 0 ? "" :` <span class="absolute right-2 bottom-2 bg-aqua rounded p-1 text-white">
        ${video.others.posted_date}
      </span>`
       }

      
     </figure>
      <div class="px-0 py-2 flex gap-2">
        <div>
          <img class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}"/>
        </div>
        <div>
         <h2 class="font-bold">${video.title}</h2>
         <div class="flex items-center gap-2">
           <p class="text-gray-400">${video.authors[0].profile_name}</p>
          ${video.authors[0].verified == true? '<img src="https://img.icons8.com/?size=32&id=h5ARXnFVFdPI&format=png">':""}
         </div>
         
         <p> </p>
        </div>
     </div>
    
     `;
    videoContainer.append(card);
   })
}

loadCategories();
loadVideos();




