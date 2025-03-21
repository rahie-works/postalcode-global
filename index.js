const { exec } = require("child_process");

function getLocation(postalCode, country) {
    return new Promise((resolve, reject) => {
        // Check if both arguments are provided
        if (!postalCode || !country) {
            return reject(new Error("Both postalCode and country are required."));
        }
        const url = `http://127.0.0.1:5001/get-location`;
        const data = JSON.stringify({ postal_code: postalCode, country: country });

        exec(
            `curl -s -X POST ${url} -H "Content-Type: application/json" -d '${data}'`,
            (error, stdout, stderr) => {
                if (error) {
                    reject(`Error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    reject(`Stderr: ${stderr}`);
                    return;
                }
                try {
                    resolve(JSON.parse(stdout));
                } catch (err) {
                    resolve({ 
                        city: undefined, 
                        state: undefined, 
                        country, postalCode, 
                        error: "No postalcode match found for the country" 
                    });
                }
            }
        );
    });
}

module.exports = { getLocation };
