/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { NODE_BACK_URL } from "../constants/constant";

class OrderService {
  public url: string;

  constructor() {
    this.url = NODE_BACK_URL;
  }

  async getQuartier(
    city_id: number
  ): Promise<{ id: number; name: string; city_id: number }[]> {
    try {
      const response = await axios.get(
        `${this.url}/public/city/${city_id}/place`,
        {}
      );

      if (response.status === 200) {
        console.log(`${this.url}/public/city/${city_id}/place`);
        console.log(response.data);

        return response.data;
      }

      return [];
    } catch (error) {
      console.error(error);

      throw error;
    }
  }
}

export default new OrderService();
