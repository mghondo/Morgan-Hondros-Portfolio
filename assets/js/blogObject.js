const part1 =
  '<div class="col-xl-4 col-md-6"> <div class="post-item position-relative h-100"> <div class="post-img position-relative overflow-hidden"><img src=';
// image
const part2 = ' class="img-fluid" alt=""> <span class="post-date">';
// Date
const part3 =
  '</span> </div> <div class="post-content d-flex flex-column"><h3 class="post-title">';
//Title
const part4 =
  '</h3> <div class="meta d-flex align-items-center"> <div class="d-flex align-items-center"> <i class="bi bi-person"></i> <span class="ps-2">';
//Author
const part5 =
  '</span></div> <span class="px-3 text-black-50">/</span> <div class="d-flex align-items-center"> <i class="bi bi-folder2"></i> <span class="ps-2">';
// Subject
const part6 = "</span></div></div><p>";
// Summary
const part7 = "</p><hr><a href=";
// Link
const part8 =
  'lass="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a></div></div></div>';

class BlogPostSum {
  constructor(date, title, photo, author, topic, summary, link) {
    // this.date = new Date();
    this.date = date;
    this.title = title;
    this.photo = photo;
    this.author = author;
    this.topic = topic;
    this.summary = summary;
    this.link = link;
  }

  getMonthString() {
    var month = this.date.getMonth(); //Create a local variable to hold the string
    switch (month) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:
        month = "Invalid month";
    }
    return month;
  }

  suffixOfDate() {
    var day = this.date.getDate();
    var suffix = "";
    var j = day % 10,
      k = day % 100;
    if (j == 1 && k != 11) {
      suffix = "st";
    }
    if (j == 2 && k != 12) {
      suffix = "nd";
    }
    if (j == 3 && k != 13) {
      suffix = "rd";
    }
    suffix = "th";
    return suffix;
  }

  formatDate() {
    // var month = this.date.getDate();

    return (
      this.getMonthString() +
      " " +
      this.date.getDate() +
      this.suffixOfDate() +
      ", " +
      this.date.getFullYear()
    );
  }
}
let blogpost1 = new BlogPostSum(
  "November 3rd, 1980",
  "My First Post",
  "assets/img/blog/blog-1.jpg",
  "Fucking me",
  "Maybe multiple topics",
  "asdfsdafa"
);

let blogpost2 = new BlogPostSum(
  "March 3rd, 1981",
  "Cody's Bday",
  "assets/img/blog/blog-1.jpg",
  "cody",
  "asdfasdfas",
  "sdfasdfafsdasf",
  "sdfasd"
);

let blogpost3 = new BlogPostSum(
  "August 3rd, 1989",
  "Hobie doing something",
  "assets/img/blog/blog-1.jpg",
  "asdfsda",
  "asdfasdfas",
  "asdfasafsdfasf",
  "link.html"
);

let blogArray = [blogpost1, blogpost2, blogpost3];

// for (let i = 0; i < blogArray.length; i++) {
//   console.log(blogArray[i].date);
// }

const H3inner = document.querySelector("#blogPostList");
for (let i = 0; i < blogArray.length; i++) {
  document
    .getElementById("blogPostList")
    .insertAdjacentHTML(
      "beforeend",
      part1 +
        blogArray[i].photo +
        part2 +
        blogArray[i].date +
        part3 +
        blogArray[i].title +
        part4 +
        blogArray[i].author +
        part5 +
        blogArray[i].topic +
        part6 +
        blogArray[i].summary +
        part7 +
        blogArray[i].link +
        part8
    );
}
