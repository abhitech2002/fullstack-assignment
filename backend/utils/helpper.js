const { uuid } = require("uuidv4");
const moment = require("moment");

const pagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getUUID = (prefix) => {
  const today = moment.utc();

  const id = `${prefix}-${today.month()}${today.year()}-${uuid()}`;

  return id;
};

module.exports = {
    pagination: pagination,
    getUUID: getUUID,
  };
  