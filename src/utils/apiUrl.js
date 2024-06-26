const PRE_URL = "";
const STG_URL = "";
const PROD_URL = "";

export const API_URL =
  process.env.EVENT_NODE_ENV === "stg"
    ? STG_URL
    : process.env.EVENT_NODE_ENV === "dev"
    ? PRE_URL
    : PROD_URL;
