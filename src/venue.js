const request = require("postman-request");

const venues = (latitude, longitude, interest, callback) => {
  console.log("Venues function initiated");
  switch (interest) {
    case "botanical garden":
      interest = "52e81612bcbc57f1066b7a22";
      break;
    case "campground":
      interest = "4bf58dd8d48988d1e4941735";
      break;
    case "dive spot":
      interest = "52e81612bcbc57f1066b7a12";
      break;
    case "emergency room":
      interest = "4bf58dd8d48988d194941735";
      break;
    case "food":
      interest = "4d4b7105d754a06374d81259";
      break;
    case "hospital":
      interest = "4bf58dd8d48988d196941735";
      break;
    case "hotel":
      interest = "4bf58dd8d48988d1fa931735";
      break;
    case "library":
      interest = "4bf58dd8d48988d12f941735";
      break;
    case "monument / landmark":
      interest = "4bf58dd8d48988d12d941735";
      break;
    case "mountain":
      interest = "4eb1d4d54b900d56c88a45fc";
      break;
    case "museum":
      interest = "4bf58dd8d48988d181941735";
      break;
    case "tourist information":
      interest = "4f4530164b9074f6e4fb00ff";
      break;
    case "waterfront":
      interest = "56aa371be4b08b9a8d5734c3";
      break;
  }
  console.log(interest);
  console.log(latitude + "," + longitude);

  //   request({
  //     url: "https://api.foursquare.com/v2/venues/search",
  //     method: "GET",
  //     qs: {
  //       client_id: "LH44ONBH2JBU5E1OIJER2TOKUZG4HSBWQIGCY2M3IRHJ0KJK",
  //       client_secret: "4VXLZSJOSIMQU3XTGN5RVNWT3K4Y13UC0C2VITFGZMXGIPMK",
  //       ll: latitude + "," + longitude,
  //       categoryId: interest,
  //       v: "20180323",
  //       limit: 10,
  //     },
  //   });
  //   callback(response);

  const url =
    "https://api.foursquare.com/v2/venues/search?client_id=LH44ONBH2JBU5E1OIJER2TOKUZG4HSBWQIGCY2M3IRHJ0KJK&client_secret=4VXLZSJOSIMQU3XTGN5RVNWT3K4Y13UC0C2VITFGZMXGIPMK&ll=" +
    latitude +
    "," +
    longitude +
    "&categoryId=" +
    interest +
    "&v=20180323&limit=10";
  request({ url, json: true }, (error, { body }) => {
    callback(body.response);
  });
};

module.exports = venues;
