import { useQuery } from "@tanstack/react-query";
import { GetUserByIdParams } from "../params/user.param";
import UserService from "../services/user.service";

const service = UserService.getInstance();

export const useGetUserDetails = (params: GetUserByIdParams) => {
  return useQuery({
    queryKey: ["getUserDetails", params.id],
    queryFn: () => service.getUserById(params),
  });
};
