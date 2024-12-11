import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api', // Unique key for the API slice
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mockapi.example.com', // Replace with your actual API base URL
  }),
  endpoints: (builder) => ({
    // 1. Search all
    searchAll: builder.query({
      query: (query) => `/search?query=${query}`, // Query parameter for searching
    }),
    // 2. Fetch all doctors
    getAllDoctors: builder.query({
      query: () => '/doctors',
    }),
    // 3. Fetch all locations
    getAllLocations: builder.query({
      query: () => '/locations',
    }),
    // 4. Fetch all services
    getAllServices: builder.query({
      query: () => '/services',
    }),
    // 5. Fetch a single location
    getSingleLocation: builder.query({
      query: (id) => `/locations/${id}`, // Pass location ID
    }),
    // 6. Fetch a single doctor
    getSingleDoctor: builder.query({
      query: (id) => `/doctors/${id}`, // Pass doctor ID
    }),
    // 7. Fetch a single service
    getSingleService: builder.query({
      query: (id) => `/services/${id}`, // Pass service ID
    }),
  }),
});

// Export hooks for each endpoint
export const {
  useSearchAllQuery,
  useGetAllDoctorsQuery,
  useGetAllLocationsQuery,
  useGetAllServicesQuery,
  useGetSingleLocationQuery,
  useGetSingleDoctorQuery,
  useGetSingleServiceQuery,
} = apiSlice;
