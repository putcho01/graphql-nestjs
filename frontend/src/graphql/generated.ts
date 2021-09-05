import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Book = {
  id: Scalars['ID'];
  title: Scalars['String'];
  author: Array<Scalars['String']>;
  price: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type Mutation = {
  addBook: Book;
  removeBook: Scalars['Boolean'];
};


export type MutationAddBookArgs = {
  newBook: NewBookInput;
};


export type MutationRemoveBookArgs = {
  id: Scalars['Int'];
};

export type NewBookInput = {
  title: Scalars['String'];
  price: Scalars['Int'];
  author: Array<Scalars['String']>;
};

export type Query = {
  books: Array<Book>;
  getBook: Book;
};


export type QueryGetBookArgs = {
  id: Scalars['Int'];
};

export type AddBookMutationVariables = Exact<{
  newBook: NewBookInput;
}>;


export type AddBookMutation = { addBook: { title: string, id: string, author: Array<string>, createdAt: any, price: number } };

export type RemoveBookMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveBookMutation = { removeBook: boolean };

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = { books: Array<{ title: string, price: number, createdAt: any }> };

export type GetBookQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetBookQuery = { getBook: { title: string, price: number, createdAt: any } };


export const AddBookDocument = gql`
    mutation addBook($newBook: NewBookInput!) {
  addBook(newBook: $newBook) {
    title
    id
    author
    createdAt
    price
  }
}
    `;
export type AddBookMutationFn = Apollo.MutationFunction<AddBookMutation, AddBookMutationVariables>;

/**
 * __useAddBookMutation__
 *
 * To run a mutation, you first call `useAddBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBookMutation, { data, loading, error }] = useAddBookMutation({
 *   variables: {
 *      newBook: // value for 'newBook'
 *   },
 * });
 */
export function useAddBookMutation(baseOptions?: Apollo.MutationHookOptions<AddBookMutation, AddBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBookMutation, AddBookMutationVariables>(AddBookDocument, options);
      }
export type AddBookMutationHookResult = ReturnType<typeof useAddBookMutation>;
export type AddBookMutationResult = Apollo.MutationResult<AddBookMutation>;
export type AddBookMutationOptions = Apollo.BaseMutationOptions<AddBookMutation, AddBookMutationVariables>;
export const RemoveBookDocument = gql`
    mutation removeBook($id: Int!) {
  removeBook(id: $id)
}
    `;
export type RemoveBookMutationFn = Apollo.MutationFunction<RemoveBookMutation, RemoveBookMutationVariables>;

/**
 * __useRemoveBookMutation__
 *
 * To run a mutation, you first call `useRemoveBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeBookMutation, { data, loading, error }] = useRemoveBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveBookMutation(baseOptions?: Apollo.MutationHookOptions<RemoveBookMutation, RemoveBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveBookMutation, RemoveBookMutationVariables>(RemoveBookDocument, options);
      }
export type RemoveBookMutationHookResult = ReturnType<typeof useRemoveBookMutation>;
export type RemoveBookMutationResult = Apollo.MutationResult<RemoveBookMutation>;
export type RemoveBookMutationOptions = Apollo.BaseMutationOptions<RemoveBookMutation, RemoveBookMutationVariables>;
export const BooksDocument = gql`
    query books {
  books {
    title
    price
    createdAt
  }
}
    `;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBooksQuery(baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
      }
export function useBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;
export const GetBookDocument = gql`
    query getBook($id: Int!) {
  getBook(id: $id) {
    title
    price
    createdAt
  }
}
    `;

/**
 * __useGetBookQuery__
 *
 * To run a query within a React component, call `useGetBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookQuery(baseOptions: Apollo.QueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
      }
export function useGetBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
        }
export type GetBookQueryHookResult = ReturnType<typeof useGetBookQuery>;
export type GetBookLazyQueryHookResult = ReturnType<typeof useGetBookLazyQuery>;
export type GetBookQueryResult = Apollo.QueryResult<GetBookQuery, GetBookQueryVariables>;