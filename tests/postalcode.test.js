const { getLocation } = require("../dist/index");

test("Returns correct city and state for valid ZIP code", async () => {
    const result = await getLocation({ postalCode: "3200", country: "DK" });
    expect(result).toHaveProperty("city", "Helsinge");
    expect(result).toHaveProperty("state", "Capital Region");
});

test("Throws an error when postalCode or country is missing", async () => {
    await expect(getLocation({ postalCode: "10001", country: null })).rejects.toThrow("Both postalCode and country are required.");
    await expect(getLocation({ postalCode: null, country: "US" })).rejects.toThrow("Both postalCode and country are required.");
    await expect(getLocation({})).rejects.toThrow("Both postalCode and country are required.");
});

test("Returns undefined city and state for invalid ZIP code", async () => {
    const result = await getLocation({ postalCode: "00000", country: "US" });
    expect(result).toHaveProperty("city", undefined);
    expect(result).toHaveProperty("state", undefined);
    expect(result).toHaveProperty("error", "Failed to fetch postal code info. Please check postalcode or counytry code");
});
