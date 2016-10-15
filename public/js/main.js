
function myFunction() {
  document.getElementById("demo").innerHTML = "Ahh BOOOOOOO";
}

$(document).ready(function() {
  getWeather();
});

function searchWeather() {
  var searchQuery = $('.search').val(); // grab value from search input
  getWeather(searchQuery);
}

function getWeather(searchQuery) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?'; // url for the API
  var params = {
    APPID: apiKey, // coming from apiKey in index.ejs
    units: 'imperial' // let's use fahrenheit. murica!
  };
  if (searchQuery) {
    params.q = searchQuery;
  } else {
    params.id = 4930956 // defaults to id for Boston, you can find city codes here http://bulk.openweathermap.org/sample/
  }
  $.ajax(url + $.param(params), {
    success: function (data) {
      var countryName = getCountryName(data.sys.country);
      $('.city').text(`${data.name}, ${countryName}`);
      $('.temp').text(`${data.main.temp} °F`);
      $('.summary').html(parseSummary(data));
    },
    error: function (error) {
      $('.error-message').text('An error occurred :D :D');
    }
  });
}

function parseSummary(data) {
  if (data.weather) {
    var weatherItems = data.weather.map(function(weatherItem) {
      var description = weatherItem.description;
      // the api gives you an icon file name, all icon pngs are available at http://openweathermap.org/img/w
      var iconSrc = 'http://openweathermap.org/img/w/' + weatherItem.icon + '.png';
      return `<div class="summary-item"><span>${description}</span><img src="${iconSrc}"/></div>`;
    });
    return weatherItems.join('');
  }
}

// this section is for my image API 

function searchImages() {
  var searchQuery = $('.search').val(); // grab value from search input
  getImages(searchQuery);
}

function getImages(searchQuery) {
  var url = 'https://pixabay.com/api/?'; // url for the Photos API
  var params = {
    key: 3530249-9829529561f14c690a9517dc2, 
    image_type: photo;
  };
  if (searchQuery) {
    params.q = searchQuery;
  } else {
    params.id = yellow+flowers // defaults to id for Yellow Flowers,
    
  $.ajax(url + $.param(params), {
    success: function (data) {
      var countryName = getCountryName(data.sys.country);
      $('.city').text(`${data.name}, ${countryName}`);
      $('.temp').text(`${data.main.temp} °F`);
      $('.summary').html(parseSummary(data));
    },
    error: function (error) {
      $('.error-message').text('An error occurred :D :D');
    }
  });
}

function parseSummary(data) {
  if (data.weather) {
    var weatherItems = data.weather.map(function(weatherItem) {
      var description = weatherItem.description;
      // the api gives you an icon file name, all icon pngs are available at http://openweathermap.org/img/w
      var iconSrc = 'http://openweathermap.org/img/w/' + weatherItem.icon + '.png';
      return `<div class="summary-item"><span>${description}</span><img src="${iconSrc}"/></div>`;
    });
    return weatherItems.join('');
  }
}

