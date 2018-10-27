module.exports = {

  error: (res, error) => {
    res.set({ 'Content-Type': 'application/json', });
    res.status(400);
    res.end(JSON.stringify({
      "message": "error",
      "error": error
    }));
  },

  created: (res, message) => {
    res.set({ 'Content-Type': 'application/json', });
    res.status(201);
    res.end(JSON.stringify({ "message": message }));
  },

  responseOk: (res, message) => {
    res.set({ 'Content-Type': 'application/json', });
    res.status(200);
    res.end(JSON.stringify({ "message": message }));
  },

  responseGet: (res, result) => {
    res.set({ 'Content-Type': 'application/json', });
    res.status(200);
    res.end(JSON.stringify(result));
  },

}