import { StandardQueryReturn } from '../infrastructure/StandardReturn';

type StdQeryRespType<T> = {
  fn: () => Promise<T>;
  errorMessage?: string;
  failMessage?: string;
};

const stdQueryResponse = async <T>({
  fn,
  errorMessage,
  failMessage,
}: StdQeryRespType<T>): Promise<StandardQueryReturn<T>> => {
  try {
    const result = await fn();
    if (!result) {
      return {
        errors: [errorMessage || 'error retrieving the data'],
        status: 'error',
        fails: [failMessage || 'retrieving data failed'],
        data: null,
      };
    }
    return {
      errors: [],
      status: 'success',
      fails: [],
      data: result,
    };
  } catch (e) {
    return {
      errors: [e instanceof Error ? e.message : 'unknown error'],
      status: 'error',
      fails: [failMessage || 'retrieving data failed'],
      data: null,
    };
  }
};

export default stdQueryResponse;
