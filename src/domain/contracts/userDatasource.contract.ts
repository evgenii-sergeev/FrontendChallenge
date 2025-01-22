import { UserListModel, UserModel } from "../models/user.model";
import {
  GetUserByIdParams
} from "../params/user.param";

export default abstract class EmployeeDatasourceContract {
  public abstract getUserList(): Promise<UserListModel | undefined>;
  public abstract createUser(
    params: unknown,
  ): Promise<UserModel | undefined>;
  public abstract getUserById(
    params: GetUserByIdParams,
  ): Promise<UserModel | undefined>;
  public abstract updateUserById(
    params: unknown,
  ): Promise<UserModel | undefined>;
  public abstract deleteUserById(
    params: unknown,
  ): Promise<UserModel | undefined>;
}
