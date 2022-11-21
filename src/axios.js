import axios from "axios";

const axiosInstance = axios.create(
    {
        baseURL: 'https://task-tracking-application-default-rtdb.firebaseio.com/',
        timeout: 1000,
        //headers: { }
      }
);

export default axiosInstance;