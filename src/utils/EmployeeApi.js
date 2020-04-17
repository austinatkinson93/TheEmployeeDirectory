import axios from "axios"

const URL = "http://dummy.restapiexample.com/api/v1/employees"


export default {
    search: function() {
      return axios.get(URL);
    }
  };

  // https://randomuser.me/api/?results=200&nat=us *will use this API after tutoring