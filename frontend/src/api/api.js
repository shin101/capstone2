import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


class RecipeApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${RecipeApi.token}` };
    const params = (method === "get") 
        ? data
        : {};
    
    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async register(data = {}) {
    let res = await this.request('auth/register/', data, "post");
    return res.token;
  }

  static async login(data) {
    let res = await this.request('auth/token/', data, "post");
    return res.token;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`)
    return res.user;
  }

  static async getAllRecipes(searchTerm) {
    let res = await this.request('recipes/', searchTerm ? { searchTerm } : {});
    return res.recipes;
  }

  static async getRecipe(id) {
    let res = await this.request(`recipes/${id}`);
    return res.recipe;
  }

  static async likeRecipe(username, id) {
    let res = await this.request(`users/${username}/recipes/${id}`, {}, "post");
    return res.result;
  }

}

export default RecipeApi;