import axios from "axios";

export const BASE_URL = "http://localhost:5001/";

class ApiServices {
  getToken() {
    const token = sessionStorage.getItem("token");
    return { Authorization: token };
  }

  getPath() {
    const userType = sessionStorage.getItem("userType");
    const USER_URL = userType == 1 ? "admin/" : userType == 3 ? "student/" : "hod/";
    return BASE_URL + USER_URL;
  }

  login(data) {
    return axios.post(BASE_URL + "student/login", data);
  }

  registerStudent(data) {
    return axios.post(BASE_URL  + "student/registerStudent", data, {
      headers: this.getToken(),
    });
  }

  changePassword(data) {
    return axios.post(this.getPath() + "changePassword", data, {
      headers: this.getToken(),
    });
  }

  addDepartment(data) {
    return axios.post(BASE_URL + "admin/addDepartment", data, {
      headers: this.getToken(),
    });
  }

  allDepartment(data) {
    return axios.post(this.getPath() + "allDepartment", data, {
      headers: this.getToken(),
    });
  }

  getSingleDepartment(data) {
    return axios.post(BASE_URL + "admin/getSingleDepartment", data, {
      headers: this.getToken(),
    });
  }

  updateDepartment(data) {
    return axios.post(BASE_URL + "admin/updateDepartment", data, {
      headers: this.getToken(),
    });
  }

  changeStatusDepartment(data) {
    return axios.post(BASE_URL + "admin/changeStatusDepartment", data, {
      headers: this.getToken(),
    });
  }

  addHod(data) {
    return axios.post(this.getPath() + "addHod", data, {
      headers: this.getToken(),
    });
  }

  allHod(data) {
    return axios.post(BASE_URL + "admin/allHod", data, {
      headers: this.getToken(),
    });
  }

  getSingleHod(data) {
    return axios.post(BASE_URL + "admin/getSingleHod", data, {
      headers: this.getToken(),
    });
  }

  updateHod(data) {
    return axios.post(BASE_URL + "admin/updateHod", data, {
      headers: this.getToken(),
    });
  }

  changeStatusHod(data) {
    return axios.post(BASE_URL + "admin/changeStatusHod", data, {
      headers: this.getToken(),
    });
  }

  allStudent(data) {
    return axios.post(BASE_URL + "admin/allStudent", data, {
      headers: this.getToken(),
    });
  }

  getSingle(data) {
    return axios.post(BASE_URL + "admin/getSingleStudent", data, {
      headers: this.getToken(),
    });
  }

  getSingleStudent(data) {
    return axios.post(BASE_URL + "student/getSingleStudent", data, {
      headers: this.getToken(),
    });
  }

  update(data) {
    return axios.post(BASE_URL + "admin/update", data, {
      headers: this.getToken(),
    });
  }

  changeStatus(data) {
    return axios.post(BASE_URL + "admin/changeStatus", data, {
      headers: this.getToken(),
    });
  }

  addComplaint(data) {
    return axios.post(BASE_URL + "student/addComplaint", data, {
      headers: this.getToken(),
    });
  }

  allComplaint(data) {
    return axios.post(this.getPath() + "allComplaint", data, {
      headers: this.getToken(),
    });
  }

  changeStatusComplaint(data) {
    return axios.post(this.getPath() + "changeStatusComplaint", data, {
      headers: this.getToken(),
    });
  }

  addEnquiry(data) {
    return axios.post(BASE_URL + "student/addEnquiry", data, {
      headers: this.getToken(),
    });
  }

  allEnquiry(data) {
    return axios.post(BASE_URL + "admin/allEnquiry", data, {
      headers: this.getToken(),
    });
  }

  deleteEnquiry(data) {
    return axios.post(BASE_URL + "admin/deleteEnquiry", data, {
      headers: this.getToken(),
    });
  }

  dashboard(data) {
    return axios.post(BASE_URL + "admin/dashboard", data, {
      headers: this.getToken(),
    });
  }

  deleteComplaint(data) {
    return axios.post(BASE_URL + "admin/deleteComplaint", data, {
      headers: this.getToken(),
    });
  }
}

export default new ApiServices();
