import UserFormatter from "@/core/formatters/user.formatter";
import { UserModel } from "@/domain/models/user.model";
import { ReactNode } from "react";

export interface UserCardProps {
  user: UserModel;
}

const UserCard = ({ user }: UserCardProps): ReactNode => {
  return (
    <div className="w-full h-full shadow bg-slate-500 p-4 flex gap-2">
      <span>{user.id}</span>
      <span>{user.name}</span>
      <span>{UserFormatter.formatAddress(user.address)}</span>
    </div>
  );
};
export default UserCard;
