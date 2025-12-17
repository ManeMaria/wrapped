import {
  type DefaultOptions,
  QueryClient,
  type UseQueryOptions,
} from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type QueryConfig<FetcherFnType extends (...args: unknown[]) => unknown> =
  UseQueryOptions<Awaited<ReturnType<FetcherFnType>>>;
