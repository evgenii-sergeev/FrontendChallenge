import { AddressModel } from "@/domain/models/user.model";

export default class UserFormatter {
  public static formatAddress(address: AddressModel): string {
    return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
  }
}
