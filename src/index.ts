import { ExecException } from "child_process";

const { exec } = require("child_process");

export interface LocationResponse {
    city?: string;
    state?: string;
    postalCode: string; 
    country: string;
    error?: string;
}

export const getLocation = ({
    postalCode, 
    country
}:{
    postalCode: string;
    country: string
}):Promise<LocationResponse> => {
    return new Promise((resolve, reject) => {
        // Check if both arguments are provided
        if (!postalCode || !country) {
            return reject(new Error("Both postalCode and country are required."));
        }
        const url = `http://127.0.0.1:5001/get-location`;
        const data = JSON.stringify({ postal_code: postalCode, country: country });

        exec(
            `curl -s -X POST ${url} -H "Content-Type: application/json" -d '${data}'`,
            (error: ExecException | null, stdout: string, stderr: string) => {
                if (error) {
                    reject(`Error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    reject(`Stderr: ${stderr}`);
                    return;
                }
                try {
                    const response = JSON.parse(stdout)
                    resolve({
                        city: response.city || undefined,
                        state: response.state || undefined,
                        country,
                        postalCode,
                      });
                } catch (err) {
                    resolve({ 
                        city: undefined, 
                        state: undefined, 
                        country,
                        postalCode, 
                        error: "No postalcode match found for the country" 
                    });
                }
            }
        );
    });
}
