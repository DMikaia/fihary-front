import { NODE_BACK_URL } from "@/constants/constant";
import { Response } from "@/constants/type";
import { LoginFormSchema } from "@/lib/form-validation";
import axios from "axios";

class AuthServices {
  public nodeURL: string;

  constructor() {
    this.nodeURL = NODE_BACK_URL;
  }

  async userLogin<T>(data: LoginFormSchema): Promise<Response<T>> {
    try {
      const response = await axios.post(`${this.nodeURL}/auth/login`, {
        email: data.email,
        password: data.password,
      });

      if (response.status === 200) {
        return {
          status: 200,
          message: "User was login successfully",
          rest: response.data.token as T,
        };
      }
      return { status: 400, message: "An error was occured when user login" };
    } catch (err) {
      return { status: 500, message: "Internal server error" };
    }
  }
}

export default new AuthServices();
