import { FLASK_BACK_URL, NODE_BACK_URL } from "@/constants/constant";
import { Response } from "@/constants/type";
import {
  AdminFormSchema,
  LoginFormSchema,
  SignupFormSchema,
} from "@/lib/form-validation";
import axios from "axios";

class AuthServices {
  public nodeURL: string;
  public flaskURL: string;

  constructor() {
    this.nodeURL = NODE_BACK_URL;
    this.flaskURL = FLASK_BACK_URL;
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

  async userSignup<T>(data: SignupFormSchema): Promise<Response<T>> {
    try {
      const response = await axios.post(`${this.nodeURL}/auth/signup`, {
        email: data.email,
        password: data.password,
        fullname: data.fullname,
        phone_number: data.phone_number,
      });

      if (response.status === 200) {
        console.log(response.data);
        return {
          status: 200,
          message: "Account was created successfully!",
          rest: response.data.token as T,
        };
      }
      return {
        status: 400,
        message: "An error was occured when creation of account",
      };
    } catch (err) {
      return { status: 500, message: "Internal server error" };
    }
  }

  async adminLogin<T>(data: AdminFormSchema): Promise<Response<T>> {
    try {
      const response = await axios.post(`${this.nodeURL}/auth/signup`, {
        email: data.email,
        password: data.password,
        ref: data.ref,
      });

      if (response.status === 200) {
        console.log(response.data);
        return {
          status: 200,
          message: "Admin login successfully!",
          rest: response.data.token as T,
        };
      }
      return {
        status: 400,
        message: "An error was occured when admin login",
      };
    } catch (err) {
      return { status: 500, message: "Internal server error" };
    }
  }

  async FacialRecognition<T>(picture: File): Promise<Response<T>> {
    const formData = new FormData();
    formData.append("pdp", picture);
    try {
      const response = await axios.post(
        `${this.flaskURL}/flask-api/facial-recognition`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log(response);
        return { status: 200, message: "Authentificated" };
      } else {
        return {
          status: 400,
          message: "Unauthentificated",
        };
      }
    } catch (err: any) {
      if (err.response?.status === 400) {
        return { status: 400, message: "Unauthentificated" };
      }
      console.error("error in FacialRecognition: ", err);
      return { status: 500, message: "Internal server error" };
    }
  }
}

export default new AuthServices();
