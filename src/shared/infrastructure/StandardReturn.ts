export type StandardReturn = {
  status: 'success' | 'error' | 'promise' | 'partial';
  errors: string[]; //managed by code
  fails?: string[]; //to display to user
};

export type StandardQueryReturn<T> = StandardReturn & {
  data: T | null;
};

export type StandardCreateReturn = StandardReturn & {
  data: string;
};

export type StandardMutationReturn = StandardReturn & {
  data: string | boolean;
};

export type StandardBulkDeleteReturn = StandardReturn & {
  data: string[];
};
