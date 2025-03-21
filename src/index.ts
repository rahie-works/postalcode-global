export interface LocationResponse {
    city?: string;
    state?: string;
    postalCode: string; 
    country: string;
    error?: string;
}

export const getLocation = async ({
    postalCode, 
    country
}:{
    postalCode: string;
    country: string
}):Promise<LocationResponse> => {
    if (!postalCode || !country) {
        throw new Error("Both postalCode and country are required.");
    }
    const url = `http://127.0.0.1:5001/get-location`;
    const data = JSON.stringify({ postal_code: postalCode, country });
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: data,
        });
        if (!response.ok) {
            return {
                city: undefined,
                state: undefined,
                country,
                postalCode,
                error: `No postal code match found for the country`
            }
        }
        const jsonResponse = await response.json();
        return jsonResponse;
    }catch (error :any) {
        return {
            city: undefined,
            state: undefined,
            country,
            postalCode,
            error: `Failed to fetch postal code info. Please check postalcode or counytry code`
        }
    }
}
