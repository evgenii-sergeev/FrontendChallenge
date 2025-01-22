import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GetUserByIdParams } from "../params/user.param";
import UserService from "../services/user.service";

const service = UserService.getInstance();

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: GetUserByIdParams) => service.deleteUserById(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUserList"] });
    },
  });
};
