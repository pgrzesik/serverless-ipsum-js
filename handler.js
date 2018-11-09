const lorem = require("lorem-ipsum");
const words = require("./words");
const render = require("./render");

module.exports.ipsum = async (event, context) => {
  const generatedLorem = lorem({
    words,
    count: 50,
  });

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
    body: render(generatedLorem),
  };
};
