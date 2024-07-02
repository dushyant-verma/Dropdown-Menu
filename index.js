const data = {
  usa: {
    california: ["Los Angeles", "San Francisco", "San Diego"],
    texas: ["Houston", "Dallas", "Austin"],
  },
  india: {
    HimachalPradesh: ["Mandi", "Shimla", "Kullu", "Palampur", "Manali"],
    Rajasthan: ["Jodhpur", "Jaipur", "Jaisalmair", "Bhilwara", "Chittorgarh"],
  },
};

function updateProvince() {
  const countrySelect = document.getElementById("country");
  const provinceSelect = document.getElementById("province");
  const citySelect = document.getElementById("city");
  const selectedCountry = countrySelect.value;

  provinceSelect.innerHTML =
    '<option value="">Select a Province/State</option>';
  citySelect.innerHTML = '<option value="">Select a City >/option>';
  citySelect.disabled = true;

  if (selectedCountry) {
    const provinces = Object.keys(data[selectedCountry]);
    provinces.forEach((province) => {
      const option = document.createElement("option");
      option.value = province;
      option.textContent = province.charAt(0).toUpperCase() + province.slice(1);
      provinceSelect.appendChild(option);
    });
    provinceSelect.disabled = false;
  } else {
    provinceSelect.disabled = true;
  }
}


function updateCities() {
    const countrySelect = document.getElementById("country");
    const provinceSelect = document.getElementById("province");
    const citySelect = document.getElementById("city");
    const selectedCountry = countrySelect.value
}