import {
  StandardMutationReturn,
  StandardBulkDeleteReturn,
  StandardReturn,
} from './StandardReturn';

type StdMutationRespType = {
  fn: () => Promise<string | boolean>;
  /**
   * message aimed to log
   */
  errorMessage?: string;
  /**
   * message aimed to show to the user
   */
  failMessage?: string;
};

const stdMutationResponse = async ({
  fn,
  errorMessage,
  failMessage,
}: StdMutationRespType): Promise<StandardMutationReturn> => {
  try {
    const result = await fn();
    if (!result) {
      return {
        errors: [errorMessage || 'error mutating the data'],
        status: 'error',
        fails: [failMessage || 'mutating data failed'],
        data: false,
      };
    }
    return {
      status: 'success',
      data: result,
      errors: [],
    };
  } catch (e) {
    return {
      data: false,
      errors: [e instanceof Error ? e.message : 'unknown error'],
      status: 'error',
      fails: [failMessage || 'mutating data failed'],
    };
  }
};

export default stdMutationResponse;

type StBulkMutationRespType = {
  fn: () => Promise<string[]>;
  /**
   * message aimed to log
   */
  errorMessage?: string;
  /**
   * message aimed to show to the user
   */
  failMessage?: string;
};

export const stdBulkMutationResponse = async ({
  fn,
  errorMessage,
  failMessage,
}: StBulkMutationRespType): Promise<StandardBulkDeleteReturn> => {
  try {
    const result = await fn();
    if (!result) {
      return {
        errors: [errorMessage || 'error retrieving the data'],
        status: 'error',
        fails: [failMessage || 'retrieving data failed'],
        data: [],
      };
    }
    if (!Array.isArray(result)) {
      return {
        errors: [errorMessage || 'bas format of data'],
        status: 'error',
        fails: [failMessage || 'retrieving data failed'],
        data: [],
      };
    }
    return {
      status: 'success',
      data: result,
      errors: [],
      fails: [],
    };
  } catch (e) {
    return {
      errors: [e instanceof Error ? e.message : 'unknown error'],
      status: 'error',
      fails: [failMessage || 'retrieving data failed'],
      data: [],
    };
  }
};

type StStepsRespType = {
  fn: () => Promise<StandardReturn>;
  /**
   * message aimed to log
   */
  errorMessage?: string;
  /**
   * message aimed to show to the user
   */
  failMessage?: string;
};

export const stdStepsMutationResponse = async ({
  fn,
  errorMessage = 'unknown error',
  failMessage = 'mutating data failed',
}: StStepsRespType): Promise<StandardReturn> => {
  try {
    const result = await fn();
    return result;
  } catch (e: unknown) {
    return {
      errors: [e instanceof Error ? e.message : errorMessage],
      status: 'error',
      fails: [failMessage],
    };
  }
};
