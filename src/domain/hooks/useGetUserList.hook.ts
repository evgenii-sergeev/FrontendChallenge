import { useQuery } from "@tanstack/react-query";
import UserService from "../services/user.service";

const service = UserService.getInstance();

export const useGetUserList = () => {
  return useQuery({
    queryKey: ["getUserList"],
    queryFn: () => service.getUserList(),
  });
};
