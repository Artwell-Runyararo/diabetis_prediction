import React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

const TanStackQueryProvider = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>{children} </QueryClientProvider>
    )
}
export default TanStackQueryProvider;