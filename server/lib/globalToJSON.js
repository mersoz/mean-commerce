function globalToJSON(schema) {
  schema.set('toJSON', {
    virtuals: true,
    transform(obj, json) {
      // console.log(json);
      // console.log(obj);
      delete json._id;
      delete json.__v;
      // console.log(json);
      return json;
    }
  });
}

module.exports = globalToJSON;
