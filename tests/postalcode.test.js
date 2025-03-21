const { getLocation } = require("../src/index");

test("Returns correct city and state for valid ZIP code", async () => {
  const result = await getLocation("3200", "DK");
  expect(result).toHaveProperty("city", "Helsinge");
  expect(result).toHaveProperty("state", "Capital Region");
});

test("Throws an error when postalCode or country is missing", async () => {
    await expect(getLocation("10001")).rejects.toThrow("Both postalCode and country are required.");
    await expect(getLocation(null, "US")).rejects.toThrow("Both postalCode and country are required.");
    await expect(getLocation()).rejects.toThrow("Both postalCode and country are required.");
});

test("Returns error for invalid ZIP code", async () => {
    const result = await getLocation("00000", "US");
    expect(result).toHaveProperty("city", undefined)
    expect(result).toHaveProperty("state", undefined)
    expect(result).toHaveProperty("error", "No postalcode match found for the country" )
  });
