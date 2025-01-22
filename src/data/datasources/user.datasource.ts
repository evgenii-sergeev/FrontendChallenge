import UserDatasourceContract from "@/domain/contracts/userDatasource.contract";
import {
  UserListModel,
  UserListSchema,
  UserModel,
} from "@/domain/models/user.model";

import { GetUserByIdParams } from "@/domain/params/user.param";

export default class UserDatasource extends UserDatasourceContract {
  public async getUserList(): Promise<UserListModel | undefined> {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      // Validate response
      if (response.status !== 200) {
        return undefined;
      }

      // Obtain json from response
      const data = await response.json();

      return UserListSchema.parse(data);
    } catch (exception) {
      return undefined;
    }
  }

  public async createUser(
    params: unknown,
  ): Promise<UserModel | undefined> {
    throw new Error("Method not implemented.");
  }

  public async getUserById(
    params: GetUserByIdParams,
  ): Promise<UserModel | undefined> {
    throw new Error("Method not implemented.");
  }

  public async updateUserById(
    params: unknown,
  ): Promise<UserModel | undefined> {
    throw new Error("Method not implemented.");
  }

  public async deleteUserById(
    params: unknown,
  ): Promise<UserModel | undefined> {
    throw new Error("Method not implemented.");
  }
}
