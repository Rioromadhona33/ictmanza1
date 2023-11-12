// JavaScript untuk mengisi data kegiatan
var activities = [
  {
    name: " BELAJAR TEKNOLOGI TERBARU",
    description: "Disini kita belajar tentang technology informasi dan juga technology terbaru ",
    image: "computer1.png"
  },
  {
    name: "BERBAGI PENGALAMAN & WAWASAN",
    description: "Disini juga kita sharing pengalaman dalam bidang Teknologi dan pendidikan",
    image: "sharing.png"
  },
  {
    name: "PROGRAMING",
    description: "Melalui programming, kita dapat menciptakan berbagai jenis aplikasi, software, dan lain lain. Kegiatan programming melibatkan pengembangan algoritma, pemrograman bahasa tingkat dasar, dan pemecahan masalah.",
    image: "webdvpr.png"
  },
  {
    name: "SMART LEARNING",
    description: "Metode belajarnya adalah smart learning yang menggunakan teknologi informasi dan komunikasi",
    image: "tiny.png"
  }
];

// JavaScript untuk menampilkan kegiatan
var activitiesContainer = document.getElementById("activities");

for (var i = 0; i < activities.length; i++) {
  var activity = activities[i];

  var activityElement = document.createElement("div");
  activityElement.classList.add("activity");

  if (activity.name === "BELAJAR TEKNOLOGI TERBARU") {
    activityElement.classList.add("lates-technology"); // Menambahkan class "technology" pada elemen Technology
  }
  else if (activity.name === "SMART LEARNING") {
    activityElement.classList.add("smart-learning"); // Menambahkan class "smart-learning" pada elemen Smart Learning
  }
  else if (activity.name === "BERBAGI PENGALAMAN & WAWASAN") {
    activityElement.classList.add("experience-share"); // Menambahkan class "experience-share" pada elemen Experience Share
  }

  else if (activity.name === "PROGRAMING") {
    activityElement.classList.add("programing"); // Menambahkan class "experience-share" pada elemen Experience Share
  }

  var imageElement = document.createElement("img");
  imageElement.src = activity.image;

  var nameElement = document.createElement("h2");
  nameElement.textContent = activity.name;

  var descriptionElement = document.createElement("p");
  descriptionElement.textContent = activity.description;

  activityElement.appendChild(imageElement);
  activityElement.appendChild(nameElement);
  activityElement.appendChild(descriptionElement);

  activitiesContainer.appendChild(activityElement);
}
