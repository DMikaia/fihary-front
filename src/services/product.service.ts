import { NODE_BACK_URL } from "../constants/constant";
import { MarketProduct } from "../constants/type";
import axios from "axios";

class ProductService {
  public url: string;

  constructor() {
    this.url = NODE_BACK_URL;
  }

  async getProduct(): Promise<MarketProduct[]> {
    try {
      const response = await axios.get(`${this.url}/public/prod/all`);

      if (response.status === 200) {
        console.log(response.data);

        return response.data;
      }

      return [];
    } catch (e) {
      throw e;
    }
  }
}

export default new ProductService();
