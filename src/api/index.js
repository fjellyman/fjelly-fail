const { send } = require('micro');
const cors = require('micro-cors')();

const handler = async (req, res) => {

  const isAboveSuccessRate = Math.random() > 0.8;

  const statusCode =
    isAboveSuccessRate
      ? 500
      : 200;

  const message =
    isAboveSuccessRate
      ? "Error: this request failed."
      : "Success!!";

  send(res, statusCode, { message });
}

module.exports = cors(handler);
