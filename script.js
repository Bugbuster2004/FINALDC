// var btc = document.getElementById("bitcoin");
// var eth = document.getElementById("ethereum");
// var doge = document.getElementById("dogecoin");
// var card = document.getElementById("cardano");
// var tether = document.getElementById("tether");
// var solana = document.getElementById("solana");
// var tether = document.getElementById("tether");
// var bnb = document.getElementByIdtether;
// var avalanche = document.getElementById("avalanche");

// var settings = {
//   async: true,
//   scrossDomian: true,
//   url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ccardano%2Ctether%2Ccelestia%2Csolana%2Carbitrum%2Csui&vs_currencies=usd",
//   method: "GET",
//   headers: {},
// };
// $.ajax(settings).done(function (response) {
//   //   console.log(response);
//   btc.innerHTML = response.bitcoin.usd;
//   eth.innerHTML = response.ethereum.usd;
//   doge.innerHTML = response.dogecoin.usd;
//   card.innerHTML = response.cardano.usd;
//   tether.innerHTML = response.tether.usd;
// });

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var card = document.getElementById("cardano");
var tether = document.getElementById("tether");
var solana = document.getElementById("solana");
var celestia = document.getElementById("celestia");
var sui = document.getElementById("sui");

var settings = {
  async: true,
  crossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ccardano%2Ctether%2Ccelestia%2Csolana%2Carbitrum%2Csui&vs_currencies=usd",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  // console.log(response);
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
  card.innerHTML = response.cardano.usd;
  tether.innerHTML = response.tether.usd;
  solana.innerHTML = response.solana.usd;
  celestia.innerHTML = response.arbitrum.usd;
  sui.innerHTML = response.sui.usd;
});
