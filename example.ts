const { getLocation } = require("./dist/index");

getLocation({postalCode: "5300", country: "BH"})
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
