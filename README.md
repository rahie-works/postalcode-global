# postalcode-global

A package to fetch city and state using a ZIP code worldwide. This package uses the python library pgeocode. Please find the supported country list below.

read more about [pgeocode](https://pypi.org/project/pgeocode/)

## Installation

```npm install postalcode-global```

## Supported countries
The list of countries available in the GeoNames database, with the corresponding country codes, are given below,

Andorra (AD), Argentina (AR), American Samoa (AS), Austria (AT), Australia (AU), Åland Islands (AX), Azerbaijan (AZ), Bangladesh (BD), Belgium (BE), Bulgaria (BG), Bermuda (BM), Brazil (BR), Belarus (BY), Canada (CA), Switzerland (CH), Chile (CL), Colombia (CO), Costa Rica (CR), Cyprus (CY), Czechia (CZ), Germany (DE), Denmark (DK), Dominican Republic (DO), Algeria (DZ), Estonia (EE), Spain (ES), Finland (FI), Federated States of Micronesia (FM), Faroe Islands (FO), France (FR), United Kingdom of Great Britain and Northern Ireland (GB), French Guiana (GF), Guernsey (GG), Greenland (GL), Guadeloupe (GP), Guatemala (GT), Guam (GU), Croatia (HR), Haiti (HT), Hungary (HU), Ireland (IE), Isle of Man (IM), India (IN), Iceland (IS), Italy (IT), Jersey (JE), Japan (JP), Republic of Korea (KR), Liechtenstein (LI), Sri Lanka (LK), Lithuania (LT), Luxembourg (LU), Latvia (LV), Monaco (MC), Republic of Moldova (MD), Marshall Islands (MH), The former Yugoslav Republic of Macedonia (MK), Northern Mariana Islands (MP), Martinique (MQ), Malta (MT), Malawi (MW), Mexico (MX), Malaysia (MY), New Caledonia (NC), Netherlands (NL), Norway (NO), New Zealand (NZ), Peru (PE), Philippines (PH), Pakistan (PK), Poland (PL), Saint Pierre and Miquelon (PM), Puerto Rico (PR), Portugal (PT), Palau (PW), Réunion (RE), Romania (RO), Serbia (RS), Russian Federation (RU), Sweden (SE), Singapore (SG), Slovenia (SI), Svalbard and Jan Mayen Islands (SJ), Slovakia (SK), San Marino (SM), Thailand (TH), Turkey (TR), Ukraine (UA), United States of America (US), Uruguay (UY), Holy See (VA), United States Virgin Islands (VI), Wallis and Futuna Islands (WF), Mayotte (YT), South Africa (ZA)

See [Geonames Database](https://download.geonames.org/export/zip/) for more information.

## Usage
```js
import {getLocation} from "postalcode-global";

const getCityAndState = async () => {
    const {state, city } = await getLocation({postalCode: "3200", country: "DK"})
    .then((data) => return data)
    .catch((err) => return err);
}
```

## Response

```
{
  city: 'Helsinge',
  country: 'DK',
  postal_code: '3200',
  state: 'Capital Region'
}

```

## Error Response if postal code is not identified
```
{
  city: undefined,
  country: 'DK',
  postal_code: '320000000',
  state: undefined,
  error: `No postal code match found for the country`
}
```

## Error response if postal code or country code is invalid
```
{
  city: undefined,
  country: 'DQ',
  postal_code: '32r00',
  state: undefined,
  error: `Failed to fetch postal code info. Please check postalcode or country code`
}

```
---

