import { log } from "./log.mjs";

export const handler = async (event) => {
    log(event)

    return {
        statusCode: 200,
        body: `<html><body>Dados da requisicao ${JSON.stringify(event)}</body></html>`,
        headers: {
            "content-type": "text/html"
        }
    };
  };