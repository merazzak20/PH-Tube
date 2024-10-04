// Load Categories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
// Display Categories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category");
  categories.forEach((item) => {
    const button = document.createElement("button");
    button.classList = "btn mx-3 hover:bg-red-600 hover:text-white";
    button.innerHTML = item.category;
    categoryContainer.append(button);
  });
};

// Load Videos
const loadVideo = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};

// {
//   "category_id": "1001",
//   "video_id": "aaaa",
//   "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//   "title": "Shape of You",
//   "authors": [
//       {
//           "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//           "profile_name": "Olivia Mitchell",
//           "verified": ""
//       }
//   ],
//   "others": {
//       "views": "100K",
//       "posted_date": "16278"
//   },
//   "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

// Display Videos
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videosContainer");
  videos.forEach((video) => {
    console.log(video);
    const { category_id, video_id, thumbnail, title, authors } = video;
    const videoCard = document.createElement("div");
    videoCard.classList = "card card-compact";
    videoCard.innerHTML = `
        <figure class = "h-[200px]">
            <img class ="w-full h-full object-cover"
            src=${thumbnail}/>
        </figure>
        <div class="px-0 py-2 flex gap-2 gap-x-4">
            <div>
              <img class="w-10 h-10 object-cover rounded-full" src= ${authors[0].profile_picture}  />
            </div>
            <div>
              <h2 class="font-bold">${title}</h2>
              <div class="flex items-center gap-2">
                <p class="font-semibold text-gray-400">${authors[0].profile_name}</p>
                <img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />
              </div>
              
              <p></p>
            </div>
        </div>
    `;
    videoContainer.append(videoCard);
  });
};
loadVideo();

loadCategories();
