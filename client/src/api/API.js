import axios from "axios";

export default {
  // Gets all wines
  getWine: function() {
    return axios.get("/api/wines");
  },
  // Gets the wines with the given id
  getWine: function(id) {
    return axios.get("/api/wines/" + id);
  },
  // Deletes the wine with the given id
  deleteWine: function(id) {
    return axios.delete("/api/wines/" + id);
  },
  // Saves a wine to the database
  saveWine: function(bookData) {
    return axios.post("/api/windes", bookData);
  }
};
