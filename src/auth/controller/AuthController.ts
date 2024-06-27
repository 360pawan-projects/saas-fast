import dbConnect from '@/lib/db/dbConnect';
import { SignupRequestType } from '../schema/authSchema';
import { User } from '../model/user.model';

class ProductController {
  private async getDb() {
    await dbConnect();
  }

  async signup(userCredential: SignupRequestType) {
    await this.getDb();

    const { email, password, name } = userCredential;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error('Email already used.');
    }

    await User.create({ email, name, password });

    return true;
  }
}

export default ProductController;
