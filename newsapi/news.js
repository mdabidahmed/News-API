var apikey = "f463419c4e4c4ebd96549c95688e979b";
fetch(
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" +
    apikey
)
  .then(function (response) {
    return response.json();
  })
  .then(function (responseJson) {
    return responseJson.articles;
  })
  .then(function (data) {
    $(".news").append("<h1>Headlines</h1>");
    for (var i = 0; i < 20; i++) {
      if (data[i].urlToImage == null || data[i].content == null) {
        continue;
      }
      console.log(i);
      console.log(data[i].url);

      $(".news").append(
        '<div class="card mb-3 item" style="max-width: 100%;"><div class="row no-gutters"><div class="col-md-3"><img src=' +
          data[i].urlToImage +
          'class="card-img" alt="..."></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">' +
          data[i].title +
          '</h5><p class="card-text">' +
          data[i].content +
          '</p><p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p></div></div></div></div>'
      );
    }
  })
  .catch((err) => console.log(err));

$("button").on("click", function (event) {
  event.preventDefault();
  $(".item").remove();
  $("h1").remove();
  var input = $(".input").val();
  fetch(
    "https://newsapi.org/v2/everything?q=" +
      input +
      "&from=2019-12-24&sortBy=publishedAt&apiKey=" +
      apikey
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (responseJson) {
      return responseJson.articles;
    })
    .then(function (data) {
      $(".news").append("<h1>All updates on  " + input + "</h1>");
      for (var i = 0; i < 20; i++) {
        if (data[i].urlToImage == null || data[i].content == null) {
          continue;
        }
        console.log(i);
        console.log(data[i].urlToImage);

        $(".news").append(
          '<div class="card mb-3 item" style="max-width: 100%;"><div class="row no-gutters"><div class="col-md-3"><img src=' +
            data[i].urlToImage +
            'class="card-img" alt="..."></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">' +
            data[i].title +
            '</h5><p class="card-text">' +
            data[i].content +
            '</p><p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p></div></div></div></div>'
        );
      }
    })
    .catch((err) => console.log(err));
});
