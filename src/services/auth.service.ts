import { LOCAL_SERVER_URL } from "../constants/constant";
import { LoginFormSchema } from "../lib/form-validation";
import { Response } from "../constants/type";
import axios from "axios";

class AuthService {
  public url: string;

  constructor() {
    this.url = LOCAL_SERVER_URL;
  }

  async login<T>(data: LoginFormSchema): Promise<Response<T>> {
    try {
      const response = await axios.post(
        `${this.url}api/auth/login`,
        { ...data },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);

        return { status: 200, message: "You've logged in with success!" };
      }

      return {
        status: 400,
        message: "An error occurred during you authentication",
      };
    } catch (error: unknown) {
      console.error(error);

      return { status: 500, message: "Internam server error" };
    }
  }
}

export default new AuthService();
