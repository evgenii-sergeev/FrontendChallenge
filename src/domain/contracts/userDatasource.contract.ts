import { UserListModel, UserModel } from "../models/user.model";
import {
  CreateUserParams,
  DeleteUserByIdParams,
  GetUserByIdParams,
  UpdateUserByIdParams
} from "../params/user.param";

export default abstract class EmployeeDatasourceContract {
  public abstract getUserList(): Promise<UserListModel | undefined>;
  public abstract createUser(params: CreateUserParams): Promise<UserModel | undefined>;
  public abstract getUserById(params: GetUserByIdParams): Promise<UserModel | undefined>;
  public abstract updateUserById(params: UpdateUserByIdParams): Promise<UserModel | undefined>;
  public abstract deleteUserById(params: DeleteUserByIdParams): Promise<UserModel | undefined>;
}
