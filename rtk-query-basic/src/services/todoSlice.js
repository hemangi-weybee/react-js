import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoSlice = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',
            providesTags: ['todo']
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: "/todos",
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['todo']
        }),
        updateTodo: builder.mutation({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: 'PUT',
                body: todo
            }),
            invalidatesTags: ['todo']
        }),
        deleteTodo: builder.mutation({
            query: ({id}) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['todo']
        }),
    })
})

export const { useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} = todoSlice;