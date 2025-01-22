import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserModel } from "../models/user.model";
import UserService from "../services/user.service";

const service = UserService.getInstance();

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: { id: number } & Partial<UserModel>) => service.updateUserById(params),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["getUserDetails", variables.id] });
    },
  });
};
