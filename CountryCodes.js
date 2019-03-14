const CountriesCodes = {
  KOR: "KR",
  GER: "DE",
  SRB: "RS",
  CRC: "CR",
  BEL: "BE",
  POL: "PL",
  SEN: "SN",
  ENG: "GB",
  FRA: "FR",
  CRO: "HR",
  PAN: "PA",
  TUN: "TN",
  ARG: "AR",
  POR: "PT",
  MEX: "MX",
  JPN: "JP",
  COL: "CO",
  SUI: "CH",
  URU: "UY",
  BRA: "BR",
  ESP: "ES",
  KSA: "SA",
  EGY: "EG",
  MAR: "MA",
  IRN: "IR",
  SWE: "SE",
  AUS: "AU",
  PER: "PE",
  ISL: "IS",
  NGA: "NG",
  RUS: "RU",
  DEN: "DK"
};

getCountryCode = fifaCode => {
  return CountriesCodes[fifaCode];
};
