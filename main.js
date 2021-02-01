const API_URL = "https://api.exchangeratesapi.io/latest";
const addCurrencyList = document.querySelector(".currencies");
const selectFrom = document.querySelector(".input-select-css");
const selectTo = document.querySelector(".output-select-css");
const inputFrom = document.querySelector(".inputFrom");
const inputTo = document.querySelector(".inputTo");
const date = document.querySelector(".date");
const date2 = document.querySelector(".date2");
let currencies = [
  {
    name: "Euro",
    abbreviation: "EUR",
    symbol: "\u20AC",
    flagURL:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
    rate: 1,
    symbol: "&#9674",
  },
  {
    name: "US Dollar",
    abbreviation: "USD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/us.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Japanese Yen",
    abbreviation: "JPY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/jp.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "British Pound",
    abbreviation: "GBP",
    symbol: "\u00A3",
    flagURL: "http://www.geonames.org/flags/l/uk.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Australian Dollar",
    abbreviation: "AUD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/au.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Canadian Dollar",
    abbreviation: "CAD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/ca.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Swiss Franc",
    abbreviation: "CHF",
    symbol: "\u0043\u0048\u0046",
    flagURL: "http://www.geonames.org/flags/l/ch.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Chinese Yuan Renminbi",
    abbreviation: "CNY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/cn.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Swedish Krona",
    abbreviation: "SEK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/se.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "New Zealand Dollar",
    abbreviation: "NZD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/nz.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Mexican Peso",
    abbreviation: "MXN",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/mx.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Singapore Dollar",
    abbreviation: "SGD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/sg.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Hong Kong Dollar",
    abbreviation: "HKD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/hk.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Norwegian Krone",
    abbreviation: "NOK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/no.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "South Korean Won",
    abbreviation: "KRW",
    symbol: "\u20A9",
    flagURL: "http://www.geonames.org/flags/l/kr.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Turkish Lira",
    abbreviation: "TRY",
    symbol: "\u20BA",
    flagURL: "http://www.geonames.org/flags/l/tr.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Russian Ruble",
    abbreviation: "RUB",
    symbol: "\u20BD",
    flagURL: "http://www.geonames.org/flags/l/ru.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Indian Rupee",
    abbreviation: "INR",
    symbol: "\u20B9",
    flagURL: "http://www.geonames.org/flags/l/in.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Brazilian Real",
    abbreviation: "BRL",
    symbol: "\u0052\u0024",
    flagURL: "http://www.geonames.org/flags/l/br.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "South African Rand",
    abbreviation: "ZAR",
    symbol: "\u0052",
    flagURL: "http://www.geonames.org/flags/l/za.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Philippine Peso",
    abbreviation: "PHP",
    symbol: "\u20B1",
    flagURL: "http://www.geonames.org/flags/l/ph.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Czech Koruna",
    abbreviation: "CZK",
    symbol: "\u004B\u010D",
    flagURL: "http://www.geonames.org/flags/l/cz.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Indonesian Rupiah",
    abbreviation: "IDR",
    symbol: "\u0052\u0070",
    flagURL: "http://www.geonames.org/flags/l/id.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Malaysian Ringgit",
    abbreviation: "MYR",
    symbol: "\u0052\u004D",
    flagURL: "http://www.geonames.org/flags/l/my.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Hungarian Forint",
    abbreviation: "HUF",
    symbol: "\u0046\u0074",
    flagURL: "http://www.geonames.org/flags/l/hu.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Icelandic Krona",
    abbreviation: "ISK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/is.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Croatian Kuna",
    abbreviation: "HRK",
    symbol: "\u006B\u006E",
    flagURL: "http://www.geonames.org/flags/l/hr.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Bulgarian Lev",
    abbreviation: "BGN",
    symbol: "\u043B\u0432",
    flagURL: "http://www.geonames.org/flags/l/bg.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Romanian Leu",
    abbreviation: "RON",
    symbol: "\u006C\u0065\u0069",
    flagURL: "http://www.geonames.org/flags/l/ro.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Danish Krone",
    abbreviation: "DKK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/dk.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Thai Baht",
    abbreviation: "THB",
    symbol: "\u0E3F",
    flagURL: "http://www.geonames.org/flags/l/th.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Polish Zloty",
    abbreviation: "PLN",
    symbol: "\u007A\u0142",
    flagURL: "http://www.geonames.org/flags/l/pl.gif",
    rate: null,
    symbol: "&#9674",
  },
  {
    name: "Israeli Shekel",
    abbreviation: "ILS",
    symbol: "\u20AA",
    flagURL: "http://www.geonames.org/flags/l/il.gif",
    rate: null,
    symbol: "&#9674",
  },
];

const currenciesStart = currencies;
let html;

async function convertor() {
  const res = await fetch(API_URL);
  if (!res.ok) {
    alert("HTTP error. The server responded with a status of  " + res.status);
  } else {
    const data = await res.json();
    const rates = data.rates;
    const arrKeys = Object.keys(data.rates);
    arrKeys.map((item) => {
      return (html += `<option value=${item}>${item}</option>`);
    });
    selectFrom.innerHTML = html;
    selectTo.innerHTML = html;

    date.innerHTML = data.date;
    date2.innerHTML = data.date;

    currencies.map((item) => {
      if (item.abbreviation === "EUR") {
        return (item.rate = 1);
      } else {
        return (item.rate = rates[item.abbreviation]);
      }
    });

    inputFrom.addEventListener("keyup", () => {
      inputTo.value = (
        (inputFrom.value * rates[selectTo.value]) /
        rates[selectFrom.value]
      ).toFixed(4);
    });

    inputTo.addEventListener("keyup", () => {
      inputFrom.value = (
        (inputTo.value * rates[selectFrom.value]) /
        rates[selectTo.value]
      ).toFixed(4);
    });

    selectFrom.addEventListener("change", () => {
      inputTo.value = (
        (inputFrom.value * rates[selectTo.value]) /
        rates[selectFrom.value]
      ).toFixed(4);
    });

    selectTo.addEventListener("change", () => {
      inputFrom.value = (
        (inputTo.value * rates[selectFrom.value]) /
        rates[selectTo.value]
      ).toFixed(4);
    });

    let localStorageCurrencies = localStorage.getItem("key3");
    currencies = JSON.parse(localStorageCurrencies);
    if (currencies === null) {
      currencies = currenciesStart;
    }

    function populateAddCurrencyList() {
      currencies.forEach((item) => {
        addCurrencyList.insertAdjacentHTML(
          "beforeend",
          `<li class="currency" id=${item.abbreviation}>
        <img src=${item.flagURL} class="flag"/>
        <div class="info">
            <p class="currency-name"> ${item.abbreviation} </p>
            <p class="base-currency-rate">1 EUR = ${item.rate} ${item.abbreviation}</p>
            <span class="close">${item.symbol}</span>
         </div>
    </li>`
        );
      });
    }

    populateAddCurrencyList();

    addCurrencyList.addEventListener("click", addCurrencyListClick);

    function addCurrencyListClick(event) {
      const clickedListItem = event.target.closest("li");
      const index = currencies.findIndex(
        (item) => item.abbreviation == clickedListItem.id
      );
      const topItem = currencies[index];
      if (topItem["symbol"] === "&#10004") {
        topItem["symbol"] = "&#9674";
        currencies.splice(index, 1);
        currencies.push(topItem);
      } else {
        topItem["symbol"] = "&#10004";
        currencies.splice(index, 1);
        currencies.unshift(topItem);
      }

      let currenciesNode = document.getElementById("currencies_list");
      while (currenciesNode.firstChild) {
        currenciesNode.removeChild(currenciesNode.firstChild);
      }
      populateAddCurrencyList();
      localStorage.setItem("key3", JSON.stringify(currencies));
    }
  }
}

convertor();
