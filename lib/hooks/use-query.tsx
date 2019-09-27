import { useQuery as useApolloQuery, QueryHookOptions } from '@apollo/react-hooks';
import { OperationVariables, QueryResult } from '@apollo/react-common';
import { DocumentNode } from 'graphql';

/* this sets default options on the useQuery hook of the @apollo/react-hooks package */
export function useQuery<TData = any, TVariables = OperationVariables>(
	query: DocumentNode,
	options?: QueryHookOptions<TData, TVariables>
) {
	return useApolloQuery(query, {
		errorPolicy: 'all',
		...options
	});
}
