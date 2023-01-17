import fetch from "utils/fetch";

export class User {
  async getUser(token) {
    const user = await fetch.get('/user/info', token);
    console.log("🚀 ~ file: User.service.js:6 ~ User ~ getUser ~ user", user)
  }
}