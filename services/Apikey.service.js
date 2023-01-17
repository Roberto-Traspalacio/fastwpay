import fetch from "utils/fetch";

export class Apikey {
  async changeStatus(idKey, token) {
    await fetch.get(`/keys/change-status/${idKey}`, token);
  }
}