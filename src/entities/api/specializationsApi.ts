import baseApi from "@/shared/api/baseApi";


export const skillsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSkills: build.query({
      query: ({ page, limit }) =>
        `/specializations?page=${page}&limit=${limit}`,
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;