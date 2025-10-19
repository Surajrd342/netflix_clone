import { MovieSectionProps } from "@/types";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

const section: MovieSectionProps[] = [
  {
    heading: "Top 10 Movies in US today",
    endpoint: "/movie/top_rated?language=en-US&page=1",
  },
  {
    heading: "Horror Movies",
    endpoint: "/discover/movie?with_genres=27&language=en-US&page=1",
  },
  {
    heading: "Trending Now",
    endpoint: "/trending/movie/week?language=en-US&page=1",
  },
  {
    heading: "Comedies",
    endpoint: "/discover/movie?with_genres=35&language=en-US&page=1",
  },
  {
    heading: "Action",
    endpoint: "/discover/movie?with_genres=28&language=en-US&page=1",
  },
  {
    heading: "Mystery Movies",
    endpoint: "/discover/movie?with_genres=9648&language=en-US&page=1",
  },
  {
    heading: "Drama",
    endpoint: "/discover/movie?with_genres=18&language=en-US&page=1",
  },
  {
    heading: "Adventure",
    endpoint: "/discover/movie?with_genres=12&language=en-US&page=1",
  },
  {
    heading: "Romance",
    endpoint: "/discover/movie?with_genres=10749&language=en-US&page=1",
  },
  {
    heading: "Documentaries",
    endpoint: "/discover/movie?with_genres=99&language=en-US&page=1",
  },
];

export default page;
