import UserDatasource from "@/data/datasources/user.datasource";
import UserDatasourceContract from "../contracts/userDatasource.contract";
import { UserListModel, UserModel } from "../models/user.model";
import { GetUserByIdParams } from "../params/user.param";

export default class UserService {
  private static _instance: UserService;
  public static getInstance(): UserService {
    if (!UserService._instance) {
      UserService._instance = new UserService();
    }
    return UserService._instance;
  }

  private constructor(
    private datasource: UserDatasourceContract = new UserDatasource(),
  ) {}

  public getUserList(): Promise<UserListModel | undefined> {
    return this.datasource.getUserList();
  }
  public createUser(params: unknown): Promise<UserModel | undefined> {
    return this.datasource.createUser(params);
  }
  public getUserById(
    params: GetUserByIdParams,
  ): Promise<UserModel | undefined> {
    return this.datasource.getUserById(params);
  }
  public updateUserById(params: unknown): Promise<UserModel | undefined> {
    return this.datasource.updateUserById(params);
  }
  public deleteUserById(params: unknown): Promise<UserModel | undefined> {
    return this.datasource.deleteUserById(params);
  }
}
