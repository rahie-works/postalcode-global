const { getLocation, validatePostalCode, postalCodeExistForCountry } = require("./dist/index");

getLocation({postalCode: "3200", country: "DK"})
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

console.log("==validatePostalCode", validatePostalCode({countryCode: "GB", postalCode: "PO1 3AX"}));

console.log("==postalCodeExistForCountry", postalCodeExistForCountry({countryCode: "AO"}));