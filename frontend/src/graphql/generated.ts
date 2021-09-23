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
  addStore: Store;
  removeStore: Scalars['Boolean'];
  addReview: Review;
  removeReview: Scalars['Boolean'];
};


export type MutationAddBookArgs = {
  newBook: NewBookInput;
};


export type MutationRemoveBookArgs = {
  id: Scalars['Int'];
};


export type MutationAddStoreArgs = {
  newStore: NewStoreInput;
};


export type MutationRemoveStoreArgs = {
  id: Scalars['Int'];
};


export type MutationAddReviewArgs = {
  newReview: NewReviewInput;
};


export type MutationRemoveReviewArgs = {
  id: Scalars['Int'];
};

export type NewBookInput = {
  title: Scalars['String'];
  price: Scalars['Int'];
  author: Array<Scalars['String']>;
};

export type NewReviewInput = {
  storeId: Scalars['Int'];
  score: Scalars['Int'];
  title: Scalars['String'];
  content: Scalars['String'];
};

export type NewStoreInput = {
  name: Scalars['String'];
  address: Scalars['String'];
  genre: Scalars['String'];
  score: Scalars['Int'];
};

export type Query = {
  books: Array<Book>;
  getBook: Book;
  stores: Array<Store>;
  getStore: Store;
  reviews: Array<Review>;
  getReview: Review;
};


export type QueryGetBookArgs = {
  id: Scalars['Int'];
};


export type QueryGetStoreArgs = {
  id: Scalars['Int'];
};


export type QueryGetReviewArgs = {
  id: Scalars['Int'];
};

export type Review = {
  id: Scalars['ID'];
  storeId: Scalars['ID'];
  score: Scalars['Int'];
  title: Scalars['String'];
  content: Scalars['String'];
};

export type Store = {
  id: Scalars['ID'];
  score: Scalars['Int'];
  name: Scalars['String'];
  address: Scalars['String'];
  genre: Scalars['String'];
};

export type AddBookMutationVariables = Exact<{
  newBook: NewBookInput;
}>;


export type AddBookMutation = { addBook: { title: string, id: string, author: Array<string>, createdAt: any, price: number } };

export type RemoveBookMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveBookMutation = { removeBook: boolean };

export type AddReviewMutationVariables = Exact<{
  newReview: NewReviewInput;
}>;


export type AddReviewMutation = { addReview: { storeId: string, score: number, title: string, content: string } };

export type RemoveReviewMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveReviewMutation = { removeReview: boolean };

export type AddStoreMutationVariables = Exact<{
  newStore: NewStoreInput;
}>;


export type AddStoreMutation = { addStore: { name: string, address: string, genre: string, score: number } };

export type RemoveStoreMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveStoreMutation = { removeStore: boolean };

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = { books: Array<{ title: string, price: number, createdAt: any }> };

export type GetBookQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetBookQuery = { getBook: { title: string, price: number, createdAt: any } };

export type ReviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type ReviewsQuery = { reviews: Array<{ id: string, storeId: string, score: number, title: string, content: string }> };

export type GetReviewQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetReviewQuery = { getReview: { id: string, storeId: string, score: number, title: string, content: string } };


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
export const AddReviewDocument = gql`
    mutation addReview($newReview: NewReviewInput!) {
  addReview(newReview: $newReview) {
    storeId
    score
    title
    content
  }
}
    `;
export type AddReviewMutationFn = Apollo.MutationFunction<AddReviewMutation, AddReviewMutationVariables>;

/**
 * __useAddReviewMutation__
 *
 * To run a mutation, you first call `useAddReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReviewMutation, { data, loading, error }] = useAddReviewMutation({
 *   variables: {
 *      newReview: // value for 'newReview'
 *   },
 * });
 */
export function useAddReviewMutation(baseOptions?: Apollo.MutationHookOptions<AddReviewMutation, AddReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddReviewMutation, AddReviewMutationVariables>(AddReviewDocument, options);
      }
export type AddReviewMutationHookResult = ReturnType<typeof useAddReviewMutation>;
export type AddReviewMutationResult = Apollo.MutationResult<AddReviewMutation>;
export type AddReviewMutationOptions = Apollo.BaseMutationOptions<AddReviewMutation, AddReviewMutationVariables>;
export const RemoveReviewDocument = gql`
    mutation removeReview($id: Int!) {
  removeReview(id: $id)
}
    `;
export type RemoveReviewMutationFn = Apollo.MutationFunction<RemoveReviewMutation, RemoveReviewMutationVariables>;

/**
 * __useRemoveReviewMutation__
 *
 * To run a mutation, you first call `useRemoveReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeReviewMutation, { data, loading, error }] = useRemoveReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveReviewMutation(baseOptions?: Apollo.MutationHookOptions<RemoveReviewMutation, RemoveReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveReviewMutation, RemoveReviewMutationVariables>(RemoveReviewDocument, options);
      }
export type RemoveReviewMutationHookResult = ReturnType<typeof useRemoveReviewMutation>;
export type RemoveReviewMutationResult = Apollo.MutationResult<RemoveReviewMutation>;
export type RemoveReviewMutationOptions = Apollo.BaseMutationOptions<RemoveReviewMutation, RemoveReviewMutationVariables>;
export const AddStoreDocument = gql`
    mutation addStore($newStore: NewStoreInput!) {
  addStore(newStore: $newStore) {
    name
    address
    genre
    score
  }
}
    `;
export type AddStoreMutationFn = Apollo.MutationFunction<AddStoreMutation, AddStoreMutationVariables>;

/**
 * __useAddStoreMutation__
 *
 * To run a mutation, you first call `useAddStoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStoreMutation, { data, loading, error }] = useAddStoreMutation({
 *   variables: {
 *      newStore: // value for 'newStore'
 *   },
 * });
 */
export function useAddStoreMutation(baseOptions?: Apollo.MutationHookOptions<AddStoreMutation, AddStoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddStoreMutation, AddStoreMutationVariables>(AddStoreDocument, options);
      }
export type AddStoreMutationHookResult = ReturnType<typeof useAddStoreMutation>;
export type AddStoreMutationResult = Apollo.MutationResult<AddStoreMutation>;
export type AddStoreMutationOptions = Apollo.BaseMutationOptions<AddStoreMutation, AddStoreMutationVariables>;
export const RemoveStoreDocument = gql`
    mutation removeStore($id: Int!) {
  removeStore(id: $id)
}
    `;
export type RemoveStoreMutationFn = Apollo.MutationFunction<RemoveStoreMutation, RemoveStoreMutationVariables>;

/**
 * __useRemoveStoreMutation__
 *
 * To run a mutation, you first call `useRemoveStoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveStoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeStoreMutation, { data, loading, error }] = useRemoveStoreMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveStoreMutation(baseOptions?: Apollo.MutationHookOptions<RemoveStoreMutation, RemoveStoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveStoreMutation, RemoveStoreMutationVariables>(RemoveStoreDocument, options);
      }
export type RemoveStoreMutationHookResult = ReturnType<typeof useRemoveStoreMutation>;
export type RemoveStoreMutationResult = Apollo.MutationResult<RemoveStoreMutation>;
export type RemoveStoreMutationOptions = Apollo.BaseMutationOptions<RemoveStoreMutation, RemoveStoreMutationVariables>;
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
export const ReviewsDocument = gql`
    query reviews {
  reviews {
    id
    storeId
    score
    title
    content
  }
}
    `;

/**
 * __useReviewsQuery__
 *
 * To run a query within a React component, call `useReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useReviewsQuery(baseOptions?: Apollo.QueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
      }
export function useReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
        }
export type ReviewsQueryHookResult = ReturnType<typeof useReviewsQuery>;
export type ReviewsLazyQueryHookResult = ReturnType<typeof useReviewsLazyQuery>;
export type ReviewsQueryResult = Apollo.QueryResult<ReviewsQuery, ReviewsQueryVariables>;
export const GetReviewDocument = gql`
    query getReview($id: Int!) {
  getReview(id: $id) {
    id
    storeId
    score
    title
    content
  }
}
    `;

/**
 * __useGetReviewQuery__
 *
 * To run a query within a React component, call `useGetReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetReviewQuery(baseOptions: Apollo.QueryHookOptions<GetReviewQuery, GetReviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReviewQuery, GetReviewQueryVariables>(GetReviewDocument, options);
      }
export function useGetReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReviewQuery, GetReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReviewQuery, GetReviewQueryVariables>(GetReviewDocument, options);
        }
export type GetReviewQueryHookResult = ReturnType<typeof useGetReviewQuery>;
export type GetReviewLazyQueryHookResult = ReturnType<typeof useGetReviewLazyQuery>;
export type GetReviewQueryResult = Apollo.QueryResult<GetReviewQuery, GetReviewQueryVariables>;