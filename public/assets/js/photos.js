const part1 =
  '<div class="col-lg-4 col-md-6 portfolio-item filter-design"><div class="portfolio-content h-100"><img src="';
// Image
const part2 = '" class="img-fluid" alt=""><div class="portfolio-info"><h4>';
// keyword or name or whatever
const part3 = "</h4><p>";
// description
const part4 = '</p><a href="';
//second image
const part5 = '" title="';
const part5a =
  '" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a><a href=';
//link
const part6 =
  ' title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a></div></div></div>';

class ImagePost {
  constructor(image, keyword, description, link) {
    this.image = image;
    this.keyword = keyword;
    this.description = description;
    this.link = link;
  }
}

let imagePost0001 = new ImagePost(
  "assets/img/sccubaDoo3.jpg",
  "Scuba Doo",
  "Three engine Yamaha",
  "New family boat in the Bahamas",
  ""
);

let imagePost0002 = new ImagePost(
  "assets/img/texastrees.jpeg",
  "Hunt, Texas",
  "Trees in Hunt Texas",
  "Austin, one of my favorite parts of the country.",
  ""
);

let imagePost0003 = new ImagePost(
  "assets/img/stonedcrab.jpg",
  "Stoned Crab",
  "Stone Crab Restaurant on Grand Bahama Island",
  "Stop by Stoned Crab on Grand Bahama Island.",
  ""
);
let imagePost0004 = new ImagePost(
  "assets/img/IMG_0820.JPG",
  "Turtle in Bahamas",
  "The turtle was prolly older than both of us.",
  "Stop by and see the Turtles and Dolphins at Unexo on Grand Bahama"
);
let imagePost0005 = new ImagePost(
  "assets/img/willf.jpg",
  "Will Ferrel",
  "Met Will Ferrel at a charity event in San Diego.",
  "My counsins were frat brothers with Will Ferrel. They meet every few years for a charity they made during school."
);
let imagePost0006 = new ImagePost(
  "assets/img/f2d629b5-c2ab-4bd1-ac1e-18d165826f7f.jpg",
  "Motive Jeep",
  "Motive Jeep in downtown Columbus",
  "Visit trymotivewellness.com"
);
let imagePost0007 = new ImagePost(
  "assets/img/ida.miami.jpeg",
  "Girfriend Idaliz and Aunt Babbette in Miami.",
  "Not sure what hotel.",
  ""
);
let imagePost0008 = new ImagePost(
  "assets/img/IMG_0003.HEIC.jpg",
  "Taking the boat out.",
  "",
  ""
);
let imagePost0009 = new ImagePost(
  "assets/img/IMG_0022.jpeg",
  "At sunset.",
  "",
  ""
);
let imagePost0010 = new ImagePost(
  "assets/img/IMG_0046.jpeg",
  "In the canal on Grand Bahamas",
  "Near Smiths Point Beach.",
  ""
);
let imagePost0011 = new ImagePost(
  "assets/img/IMG_0063.HEIC.jpg",
  "Heading out to sea",
  "",
  ""
);
let imagePost0012 = new ImagePost(
  "assets/img/IMG_0064.HEIC.jpg",
  "Nobody steering",
  "",
  ""
);
let imagePost0013 = new ImagePost(
  "assets/img/IMG_0065.jpeg",
  "Scuba Doo",
  "",
  ""
);
let imagePost0014 = new ImagePost(
  "assets/img/IMG_0067.jpeg",
  "More Boat",
  "",
  ""
);

let imagePost0015 = new ImagePost("assets/img/IMG_0093.jpeg", "Sunset", "", "");

let imagePost0016 = new ImagePost(
  "assets/img/IMG_0094.jpeg",
  "More Boat",
  "",
  ""
);
let imagePost0017 = new ImagePost(
  "assets/img/IMG_1122.jpeg",
  "New Years Eve, Cleveland OH",
  "",
  ""
);
let imagePost0018 = new ImagePost(
  "assets/img/IMG_1382.jpeg",
  "Juicing",
  "",
  ""
);
let imagePost0019 = new ImagePost(
  "assets/img/IMG_2202.jpeg",
  "Ava in Winter Park, FL",
  "",
  ""
);
let imagePost0020 = new ImagePost(
  "assets/img/IMG_2208.jpeg",
  "Ava in Winter Park, FL",
  "",
  ""
);
let imagePost0021 = new ImagePost(
  "assets/img/IMG_2209.jpeg",
  "Ava in Winter Park, FL",
  "",
  ""
);
let imagePost0022 = new ImagePost(
  "assets/img/IMG_2210.jpeg",
  "Ava in Winter Park, FL",
  "",
  ""
);
let imagePost0023 = new ImagePost(
  "assets/img/IMG_2992.jpeg",
  "Elfi in Casselberry",
  "",
  ""
);
let imagePost0024 = new ImagePost(
  "assets/img/IMG_2994.jpeg",
  "Elfi in Casselberry",
  "",
  ""
);
let imagePost0025 = new ImagePost(
  "assets/img/IMG_2999.jpeg",
  "Elfi in Casselberry",
  "",
  ""
);

let imagePost0026 = new ImagePost(
  "assets/img/IMG_3005.jpeg",
  "Crew Cat",
  "",
  ""
);
let imagePost0027 = new ImagePost(
  "assets/img/IMG_3843.jpeg",
  "New Home",
  "",
  ""
);
let imagePost0028 = new ImagePost(
  "assets/img/IMG_5171.jpeg",
  "Flying Home",
  "",
  ""
);
let imagePost0029 = new ImagePost(
  "assets/img/IMG_4698.jpeg",
  "Elfi in Colorado",
  "",
  ""
);

let imagePost0030 = new ImagePost(
  "assets/img/IMG_4363.jpg",
  "Dad and bro and me.",
  "A week before Marty Mcfly came back from kissing his mom.",
  ""
);
let imagePost0031 = new ImagePost(
  "assets/img/IMG_5256.jpeg",
  "Ingram Texas.",
  "",
  ""
);
let imagePost0032 = new ImagePost(
  "assets/img/IMG_7266.jpeg",
  "Ingram Texas.",
  "",
  ""
);
let imagePost0033 = new ImagePost(
  "assets/img/IMG_5276.jpeg",
  "Ingram Texas.",
  "",
  ""
);
let imagePost0034 = new ImagePost(
  "assets/img/IMG_5259.jpeg",
  "Ingram Texas.",
  "",
  ""
);
let imagePost0035 = new ImagePost(
  "assets/img/IMG_7829.jpeg",
  "Lady and me in Winter Park.",
  "",
  ""
);
let imagePost0036 = new ImagePost(
  "assets/img/IMG_9182.jpeg",
  "Bahama Canal.",
  "",
  ""
);
let imagePost0037 = new ImagePost(
  "assets/img/IMG_8172.jpeg",
  "Hemp Field.",
  "",
  ""
);
let imagePost0038 = new ImagePost(
  "assets/img/IMG_9187.jpeg",
  "More Boat Pics.",
  "",
  ""
);
let imagePost0039 = new ImagePost(
  "assets/img/IMG_9205.jpeg",
  "Disney Springs, Orlando.",
  "",
  ""
);
let imagePost0040 = new ImagePost(
  "assets/img/IMG_9210.jpeg",
  "STK, Disney Springs, Orlando.",
  "",
  ""
);
let imagePost0041 = new ImagePost(
  "assets/img/IMG_9215.jpeg",
  "STK, Disney Springs, Orlando.",
  "",
  ""
);
let imagePost0042 = new ImagePost(
  "assets/img/IMG_7840.jpeg",
  "Lady and me in Winter Park.",
  "",
  ""
);
let imagePost0043 = new ImagePost(
  "assets/img/IMG_9538.jpg",
  "Winter Park.",
  "",
  ""
);
let imagePost0044 = new ImagePost(
  "assets/img/IMG_9542.jpg",
  "Winter Park.",
  "",
  ""
);

let imagePost0045 = new ImagePost(
  "assets/img/IMG_9536.jpeg",
  "Centerburg, OH.",
  "Hemp not Weed",
  ""
);
let imagePost0046 = new ImagePost(
  "assets/img/IMG_9537 2.jpeg",
  "Centerburg, OH.",
  "Hemp not Weed",
  ""
);
let imagePost0047 = new ImagePost(
  "assets/img/IMG_9538.jpeg",
  "Centerburg, OH.",
  "Hemp not Weed",
  ""
);
let imagePost0048 = new ImagePost(
  "assets/img/IMG_7752.jpeg",
  "Winter Park.",
  "We met at this spot two years ago",
  ""
);
let imagePost0049 = new ImagePost(
  "assets/img/IMG_7430.jpeg",
  "Taking off.",
  "",
  ""
);
let imagePost0050 = new ImagePost(
  "assets/img/IMG_5932.jpeg",
  "Baldwin Park.",
  "",
  ""
);
let imagePost0051 = new ImagePost(
  "assets/img/IMG_5933.jpeg",
  "Baldwin Park.",
  "",
  ""
);
let imagePost0052 = new ImagePost(
  "assets/img/IMG_6908.jpeg",
  "Austin TX.",
  "",
  ""
);
let imagePost0053 = new ImagePost(
  "assets/img/IMG_9181.jpeg",
  "Grand Bahama Island.",
  "",
  ""
);
let imagePost0054 = new ImagePost(
  "assets/img/IMG_9184.jpeg",
  "Grand Bahama Island.",
  "",
  ""
);
let imagePost0055 = new ImagePost(
  "assets/img/IMG_9185.jpeg",
  "Grand Bahama Island.",
  "",
  ""
);
let imagePost0056 = new ImagePost(
  "assets/img/IMG_9187.jpeg",
  "Grand Bahama Island.",
  "",
  ""
);
let imagePost0057 = new ImagePost(
  "assets/img/IMG_5266.jpeg",
  "Hunt, TX.",
  "",
  ""
);

let photoArray = [
  imagePost0001,
  imagePost0002,
  imagePost0003,
  imagePost0004,
  imagePost0005,
  imagePost0006,
  imagePost0007,
  imagePost0008,
  imagePost0009,
  imagePost0010,
  imagePost0011,
  imagePost0012,
  imagePost0013,
  imagePost0014,
  imagePost0015,
  imagePost0016,
  imagePost0017,
  imagePost0018,
  imagePost0019,
  imagePost0020,
  imagePost0021,
  imagePost0022,
  imagePost0023,
  imagePost0024,
  imagePost0025,
  imagePost0026,
  imagePost0027,
  imagePost0028,
  imagePost0029,
  imagePost0030,
  imagePost0031,
  imagePost0032,
  imagePost0033,
  imagePost0034,
  imagePost0035,
  imagePost0036,
  imagePost0037,
  imagePost0038,
  imagePost0039,
  imagePost0040,
  imagePost0041,
  imagePost0042,
  imagePost0043,
  imagePost0044,
  imagePost0045,
  imagePost0046,
  imagePost0047,
  imagePost0048,
  imagePost0049,
  imagePost0050,
  imagePost0051,
  imagePost0052,
  imagePost0053,
  imagePost0054,
  imagePost0055,
  imagePost0056,
  imagePost0057,
];

let reverseArray = photoArray.reverse();

const galleryGrabber = document.querySelector("#galleryGrabber");

function sendThePhotosThrough(array) {
  for (let i = 0; i < array.length; i++) {
    galleryGrabber.insertAdjacentHTML(
      "beforeend",
      part1 +
        array[i].image +
        part2 +
        array[i].keyword +
        part3 +
        array[i].description +
        part4 +
        array[i].image +
        part5 +
        array[i].link +
        part5a +
        array[i].description +
        part6
    );
  }
}

sendThePhotosThrough(reverseArray);
