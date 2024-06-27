'use server';

import AuthController from '../controller/AuthController';
import { SignupRequestType } from '../schema/authSchema';
import { StandardMutationReturn } from '@/shared/infrastructure/StandardReturn';
import stdMutationResponse from '@/shared/infrastructure/stdMutationResponse';

const signupUser = async (
  userCredential: SignupRequestType
): Promise<StandardMutationReturn> => {
  const authController = new AuthController();
  const fn = () => authController.signup(userCredential);

  return stdMutationResponse({
    fn,
    failMessage: 'Error in creating user',
  });
};

export default signupUser;
