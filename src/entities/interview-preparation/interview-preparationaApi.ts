import baseApi from "@/shared/api/baseApi";

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestions: build.query({
      query: ({ specialization = 11, complexity, limit = 1 }) =>
        `interview-preparation/quizzes/mock/new?specialization=${specialization}&complexity=${complexity}&limit=${limit}`,
    }),
  }),
});
export const { useGetQuestionsQuery } = questionsApi;