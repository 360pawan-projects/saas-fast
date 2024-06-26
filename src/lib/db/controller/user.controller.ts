import { User } from "@/models/user.model";
import dbConnect from "../dbConnect";
import { UserType } from "@/app/dashboard/(pages)/customers/table";

export const fetchUsers = async (): Promise<UserType[]> => {
  try {
    await dbConnect();

    const users = await User.find();

    return users.map((user) => ({
      name: user.name,
      email: user.email,
      orderId: user.orderId,
      githubUsername: user.githubUsername,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));
  } catch (error) {
    // console.error("Error fetching users:", error);
    throw error;
  }
};
