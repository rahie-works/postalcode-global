# postalcode-global

A package to fetch city and state using a ZIP code worldwide. This package uses the python library pgeocode. Please find the supported country list below.

read more about [pgeocode](https://pypi.org/project/pgeocode/)

## Installation

```npm install postalcode-global```

## Utilities

1. getLocation ==> Promise that returns the state and city when a postal code and country code are provided
2. validatePostalCode ==> checks if the provided postal code matches the country's postal code pattern and returns a boolean
3. postalCodeExistForCountry ==> checks if the country has a postal code rule and returns a boolean

## Supported countries
The list of countries available in the GeoNames database, with the corresponding country codes, are given below,

| Country Code | Postal Code Format     | Country                     |
|--------------|------------------------|-----------------------------|
| BY           | 6 digits               | Belarus                     |
| CA           | A1A 1A1                | Canada                      |
| CH           | 4 digits               | Switzerland                 |
| CL           | 7 digits               | Chile                       |
| CO           | 6 digits               | Colombia                    |
| CR           | 5 digits               | Costa Rica                  |
| CY           | 4 digits               | Cyprus                      |
| CZ           | 5 digits               | Czechia                     |
| DE           | 5 digits               | Germany                     |
| DK           | 4 digits               | Denmark                     |
| DO           | 5 digits               | Dominican Republic          |
| DZ           | 5 digits               | Algeria                     |
| EE           | 5 digits               | Estonia                     |
| ES           | 5 digits               | Spain                       |
| FI           | 5 digits               | Finland                     |
| FM           | 5 digits               | Federated States of Micronesia |
| FO           | 4 digits               | Faroe Islands               |
| FR           | 5 digits               | France                      |
| GB           | AA1 1AA                | United Kingdom of Great Britain and Northern Ireland |
| GF           | 9 digits               | French Guiana               |
| GG           | GY1 1AA                | Guernsey                    |
| GL           | 4 digits               | Greenland                    |
| GP           | 97100-97199            | Guadeloupe                  |
| GT           | 5 digits               | Guatemala                   |
| GU           | 5 digits               | Guam                        |
| HR           | 5 digits               | Croatia                     |
| HT           | 4 digits               | Haiti                       |
| HU           | 4 digits               | Hungary                     |
| IE           | A65 2XX                | Ireland                     |
| IM           | IM1 1AA                | Isle of Man                 |
| IN           | 6 digits               | India                       |
| IS           | 3 digits               | Iceland                     |
| IT           | 5 digits               | Italy                       |
| JE           | JE1 1AA                | Jersey                      |
| JP           | 7 digits               | Japan                       |
| KR           | 5 digits               | Republic of Korea           |
| LI           | 4 digits               | Liechtenstein               |
| LK           | 5 digits               | Sri Lanka                   |
| LT           | 5 digits               | Lithuania                   |
| LU           | 4 digits               | Luxembourg                  |
| LV           | 4 digits               | Latvia                      |
| MC           | 5 digits               | Monaco                      |
| MD           | 6 digits               | Republic of Moldova         |
| MH           | 5 digits               | Marshall Islands            |
| MK           | 4 digits               | The former Yugoslav Republic of Macedonia |
| MP           | 5 digits               | Northern Mariana Islands    |
| MQ           | 97200-97299            | Martinique                  |
| MT           | VLT 1000               | Malta                       |
| MW           | 5 digits               | Malawi                      |
| MX           | 5 digits               | Mexico                      |
| MY           | 5 digits               | Malaysia                    |
| NC           | 5 digits               | New Caledonia               |
| NL           | 4 digits               | Netherlands                 |
| NO           | 4 digits               | Norway                      |
| NZ           | 4 digits               | New Zealand                 |
| PE           | 5 digits               | Peru                        |
| PH           | 4 digits               | Philippines                 |
| PK           | 5 digits               | Pakistan                    |
| PL           | 5 digits               | Poland                      |
| PM           | 5 digits               | Saint Pierre and Miquelon   |
| PR           | 5 digits               | Puerto Rico                 |
| PT           | 4 digits               | Portugal                    |
| PW           | 5 digits               | Palau                       |
| RE           | 5 digits               | Réunion                     |
| RO           | 6 digits               | Romania                     |
| RS           | 5 digits               | Serbia                      |
| RU           | 6 digits               | Russian Federation          |
| SE           | 5 digits               | Sweden                      |
| SG           | 6 digits               | Singapore                   |
| SI           | 4 digits               | Slovenia                    |
| SJ           | 4 digits               | Svalbard and Jan Mayen Islands |
| SK           | 5 digits               | Slovakia                    |
| SM           | 5 digits               | San Marino                  |
| TH           | 5 digits               | Thailand                    |
| TR           | 5 digits               | Turkey                      |
| UA           | 5 digits               | Ukraine                     |
| US           | 5 digits or 5 digits-4 | United States of America    |
| UY           | 5 digits               | Uruguay                     |
| VA           | 5 digits               | Holy See                    |
| VI           | 5 digits               | United States Virgin Islands |
| WF           | 5 digits               | Wallis and Futuna Islands   |
| YT           | 5 digits               | Mayotte                     |
| ZA           | 4 digits               | South Africa                |

See [Geonames Database](https://download.geonames.org/export/zip/) for more information.

## Usages

## 1. getLocation

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

## 2. validatePostalCode
```js
import {validatePostalCode} from "postalcode-global";

validatePostalCode({countryCode: "IN", postalCode: "679330"});

```

## Response

```
true | false
```

## 3. postalCodeExistForCountry

```js
import {postalCodeExistForCountry} from "postalcode-global";

postalCodeExistForCountry({countryCode: "IN"});

```

## Response

```
true | false
```
