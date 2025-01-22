import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserModel } from "../models/user.model";
import UserService from "../services/user.service";

const service = UserService.getInstance();

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: Omit<UserModel, "id">) => service.createUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
