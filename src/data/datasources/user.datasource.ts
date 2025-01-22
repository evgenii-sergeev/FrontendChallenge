import UserDatasourceContract from "@/domain/contracts/userDatasource.contract";
import {
  UserListModel,
  UserListSchema,
  UserModel,
  UserSchema,
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
    params: Omit<UserModel, "id">,
  ): Promise<UserModel | undefined> {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(params),
        }
      );

      // Validate response
      if (response.status !== 201) {
        return undefined;
      }

      // Obtain json from response
      const data = await response.json();

      return UserSchema.parse(data);
    } catch (exception) {
      return undefined;
    }
  }

  public async getUserById(
    params: GetUserByIdParams,
  ): Promise<UserModel | undefined> {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`,
      );

      // Validate response
      if (response.status !== 200) {
        return undefined;
      }

      // Obtain json from response
      const data = await response.json();

      return UserSchema.parse(data);
    } catch (exception) {
      return undefined;
    }
  }

  public async updateUserById(
    params: { id: number } & Partial<UserModel>,
  ): Promise<UserModel | undefined> {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(params),
        }
      );

      // Validate response
      if (response.status !== 200) {
        return undefined;
      }

      // Obtain json from response
      const data = await response.json();

      return UserSchema.parse(data);
    } catch (exception) {
      return undefined;
    }
  }

  public async deleteUserById(
    params: GetUserByIdParams,
  ): Promise<UserModel | undefined> {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`,
        {
          method: 'DELETE',
        }
      );

      // Validate response
      if (response.status !== 200) {
        return undefined;
      }

      return {} as UserModel;
    } catch (exception) {
      return undefined;
    }
  }
}
