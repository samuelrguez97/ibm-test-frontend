const BASE_URL =
  process.env.REACT_APP_IBM_TEST_API || "http://localhost:8080/ibmtest";

const COMMON_HEADERS = {
  "Content-Type": "application/json",
  "Content-Encoding": "application/json",
};

class BaseRestService {
  get(endpoint, headers = {}) {
    return this.doRequest(endpoint, { method: "GET", headers });
  }

  post(endpoint, { headers = {}, body = {} }) {
    return this.doRequest(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
  }

  doRequest(endpoint, requestParams) {
    const requestOptions = {
      ...requestParams,
      ...{
        headers: {
          ...COMMON_HEADERS,
        },
      },
    };

    const requestURL = encodeURI(`${BASE_URL}${endpoint}`);

    return fetch(requestURL, requestOptions)
      .then(async (response) => {
        const responseJson = await response.json();

        if (!response.status.toString().startsWith("2")) {
          throw new Error();
        } else {
          return responseJson;
        }
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default BaseRestService;
