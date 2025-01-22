import { AddressModel } from "@/domain/models/user.model";

export default class UserFormatter {
  public static formatAddress(address: AddressModel | undefined): string {
    if (!address) return "";
    return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
  }
}
