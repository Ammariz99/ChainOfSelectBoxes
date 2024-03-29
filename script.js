const countriesData = [
  {
    country: "Australia",
    states: ["New South Wales", "Victoria", "Queensland"],
    cities: [
      ["Sydney", "Newcastle"],
      ["Melbourne", "Geelong"],
      ["Brisbane", "Gold Coast"],
    ],
  },
  {
    country: "Brazil",
    states: ["São Paulo", "Rio de Janeiro", "Minas Gerais"],
    cities: [
      ["São Paulo City", "Campinas"],
      ["Rio de Janeiro City", "Niterói"],
      ["Belo Horizonte", "Uberlândia"],
    ],
  },
  {
    country: "Canada",
    states: ["Ontario", "Quebec", "British Columbia"],
    cities: [
      ["Toronto", "Ottawa"],
      ["Montreal", "Quebec City"],
      ["Vancouver", "Victoria"],
    ],
  },
  {
    country: "Denmark",
    states: ["Capital Region", "Central Denmark", "North Denmark"],
    cities: [
      ["Copenhagen", "Hillerød"],
      ["Aarhus", "Randers"],
      ["Aalborg", "Hjørring"],
    ],
  },
  {
    country: "Egypt",
    states: ["Cairo", "Alexandria", "Giza"],
    cities: [
      ["Cairo City", "New Cairo"],
      ["Alexandria City", "Borg El Arab"],
      ["Giza City", "6th of October City"],
    ],
  },
  {
    country: "France",
    states: [
      "Île-de-France",
      "Provence-Alpes-Côte d'Azur",
      "Auvergne-Rhône-Alpes",
    ],
    cities: [
      ["Paris", "Marseille"],
      ["Nice", "Cannes"],
      ["Lyon", "Grenoble"],
    ],
  },
  {
    country: "Germany",
    states: ["Bavaria", "Baden-Württemberg", "North Rhine-Westphalia"],
    cities: [
      ["Munich", "Nuremberg"],
      ["Stuttgart", "Karlsruhe"],
      ["Cologne", "Düsseldorf"],
    ],
  },
  {
    country: "India",
    states: ["Maharashtra", "Uttar Pradesh", "Karnataka"],
    cities: [
      ["Mumbai", "Pune"],
      ["Lucknow", "Kanpur"],
      ["Bengaluru", "Mysuru"],
    ],
  },
  {
    country: "Japan",
    states: ["Tokyo", "Osaka", "Kanagawa"],
    cities: [
      ["Tokyo City", "Chiba"],
      ["Osaka City", "Kobe"],
      ["Yokohama", "Kawasaki"],
    ],
  },
  {
    country: "Kenya",
    states: ["Nairobi", "Mombasa", "Kisumu"],
    cities: [
      ["Nairobi City", "Karen"],
      ["Mombasa City", "Nyali"],
      ["Kisumu City", "Kondele"],
    ],
  },
  {
    country: "Lebanon",
    states: ["Beirut", "Mount Lebanon", "North Governorate"],
    cities: [
      ["Beirut City", "Jounieh"],
      ["Jbeil", "Byblos"],
      ["Tripoli", "Bsharri"],
    ],
  },
  {
    country: "Mexico",
    states: ["Mexico City", "Jalisco", "Nuevo León"],
    cities: [
      ["Mexico City", "Coyoacán"],
      ["Guadalajara", "Zapopan"],
      ["Monterrey", "San Pedro Garza García"],
    ],
  },
  {
    country: "Nigeria",
    states: ["Lagos", "Kano", "Abuja"],
    cities: [
      ["Lagos City", "Ikeja"],
      ["Kano City", "Tarauni"],
      ["Abuja City", "Gwagwalada"],
    ],
  },
  {
    country: "Oman",
    states: ["Muscat", "Dhofar", "Al Batinah"],
    cities: [
      ["Muscat City", "Seeb"],
      ["Salalah", "Mirbat"],
      ["Sohar", "Al Khaburah"],
    ],
  },
  {
    country: "Pakistan",
    states: ["Punjab", "Sindh", "Khyber Pakhtunkhwa"],
    cities: [
      ["Lahore", "Rawalpindi"],
      ["Karachi", "Hyderabad"],
      ["Peshawar", "Abbottabad"],
    ],
  },
  {
    country: "Qatar",
    states: ["Doha", "Al Rayyan", "Al Wakrah"],
    cities: [
      ["Doha City", "West Bay"],
      ["Al Rayyan City", "Muaither"],
      ["Al Wakrah City", "Mesaieed"],
    ],
  },
  {
    country: "Russia",
    states: ["Moscow", "Saint Petersburg", "Krasnodar Krai"],
    cities: [
      ["Moscow City", "Zelenograd"],
      ["Saint Petersburg City", "Vyborg"],
      ["Krasnodar", "Sochi"],
    ],
  },
  {
    country: "Saudi Arabia",
    states: ["Riyadh", "Makkah", "Eastern Province"],
    cities: [
      ["Riyadh City", "Diriyah"],
      ["Mecca", "Jeddah"],
      ["Dammam", "Khobar"],
    ],
  },
  {
    country: "Thailand",
    states: ["Bangkok", "Phuket", "Chiang Mai"],
    cities: [
      ["Bangkok City", "Nonthaburi"],
      ["Phuket City", "Kathu"],
      ["Chiang Mai City", "Hang Dong"],
    ],
  },
  {
    country: "United Arab Emirates",
    states: ["Dubai", "Abu Dhabi", "Sharjah"],
    cities: [
      ["Dubai City", "Jumeirah"],
      ["Abu Dhabi City", "Al Ain"],
      ["Sharjah City", "Ajman"],
    ],
  },
  {
    country: "Vietnam",
    states: ["Ho Chi Minh City", "Hanoi", "Da Nang"],
    cities: [
      ["Ho Chi Minh City", "District 1"],
      ["Hanoi City", "Ba Đình"],
      ["Da Nang City", "Hải Châu"],
    ],
  },
  {
    country: "Yemen",
    states: ["Sana'a", "Aden", "Taiz"],
    cities: [
      ["Sana'a City", "Al-Sabeen"],
      ["Aden City", "Khormaksar"],
      ["Taiz City", "Al-Mu'tasim"],
    ],
  },
  {
    country: "Zimbabwe",
    states: ["Harare", "Bulawayo", "Manicaland"],
    cities: [
      ["Harare City", "Borrowdale"],
      ["Bulawayo City", "Hillside"],
      ["Mutare", "Nyanga"],
    ],
  },
];

window.onload = function () {
  const selectCountry = document.getElementById("country"),
    selectState = document.getElementById("state"),
    selectCity = document.getElementById("city");

  selectState.disabled = true;
  selectCity.disabled = true;

  for (let countryData of countriesData) {
    selectCountry.options[selectCountry.options.length] = new Option(
      countryData.country,
      countryData.country
    );
  }

  selectCountry.addEventListener("change", function () {
    selectState.innerHTML = '<option value="">Select State</option>';
    selectCity.innerHTML = '<option value="">Select City</option>';

    const selectedCountry = this.value;
    const country = countriesData.find(
      (data) => data.country === selectedCountry
    );

    if (country) {
      selectState.disabled = false;
      for (let state of country.states) {
        selectState.options[selectState.options.length] = new Option(
          state,
          state
        );
      }
    } else {
      selectState.disabled = true;
      selectCity.disabled = true;
    }
  });

  selectState.addEventListener("change", function () {
    selectCity.innerHTML = '<option value="">Select City</option>';

    const selectedState = this.value;
    const selectedCountry = selectCountry.value;
    const country = countriesData.find(
      (data) => data.country === selectedCountry
    );

    if (country) {
      const state = country.states.find((state) => state === selectedState);
      if (state) {
        selectCity.disabled = false;
        const cities = country.cities[country.states.indexOf(state)];
        for (let city of cities) {
          selectCity.options[selectCity.options.length] = new Option(
            city,
            city
          );
        }
      } else {
        selectCity.disabled = true;
      }
    } else {
      selectCity.disabled = true;
    }
  });
};
