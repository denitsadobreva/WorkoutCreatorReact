import { observable, action, computed } from "mobx";
import api from "../utils/api";
import { login, isLogin } from "../utils/isAuth";

export class User {
  @observable email;
  @observable password;

  @computed get authenticated() {
    return isLogin();
  }

  @action
  setEmail = (email) => {
    this.email = email;
  };

  @action
  setPassword = (password) => {
    this.password = password;
  };

  @action
  register = async () => {
    try {
      const res = await api.post("/users", {
        email: this.email,
        password: this.password,
      });

      if (res.status === 200) {
        login(res.token);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  @action
  login = async () => {
    try {
      const res = await api.post("/auth", {
        email: this.email,
        password: this.password,
      });

      if (res.status === 200) {
        login(res.token);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
}
