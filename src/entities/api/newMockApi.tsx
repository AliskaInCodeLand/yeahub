import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newMockApi = createApi({
    reducerPath: 'newMockApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.yeatwork.ru',
        prepareHeaders: headers => {
            headers.set('Accept', 'application/json');
        }
    }),
    endpoints:  builder => ({
        getNewMock: builder.query({
            query: ({page = 1,  limit = 10}) => 
                `/specializations?page=${page}&limit=${limit}`
        }),
        getQuizzesMock: builder.query({
            query: ({limit=1, specialization=11}) =>
                `interview-preparation/quizzes/mock/new?collection=11&limit=${limit}&specialization=${specialization}`
        }),
        getQuizzes : builder.query({
            query: ({limit=1, specialization =11})=>
                `/interview-preparation/quizzes/mock/new?complexity=1%2C%202%2C%203%2C%209%2C%2010&limit=${limit}&specialization=${specialization}`
        })
    })
})

export const {useGetNewMockQuery, useGetQuizzesMockQuery, useGetQuizzesQuery} = newMockApi