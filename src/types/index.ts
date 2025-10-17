import { AxiosRequestConfig, AxiosResponse } from "axios";
import { IconType } from "react-icons";


export interface SliderButtonProps {
    isRight : boolean;
}

export interface ButtonProps {
    filled? : boolean;
    label?: string;
    Icon: IconType;
    rounded?: boolean;
    onClick?:() => void;
    hiddeen?: boolean;
}

export interface CardProps {
    defaultCard?: boolean;
    removeMovie?: (id: number) => void;
    item: Media;
    MediaType?: string;
    enableGenres?: boolean;
}

export interface MediaType{
    MOVIE: string;
    TV: "tv";
}

export interface Genre {
  id: number;
  name: string;
}

export interface Media {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_id: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  key?: number;
  type?: string;
  genres?: Genre[];
}

export interface Video{
    id: string;
    ley: string;
    type: string;
    name: string;
    site: string;
}

export interface MediaItem{
    id: number;
    type: "movie" | "tv";
    title: string;
}


export interface AxiosErrorType {
  code?: string;
  message: string;
  config: AxiosRequestConfig;
  name: string;
  request?: XMLHttpRequest;
  response?: AxiosResponse;
  status?: number;
  stack?: string;
}

export interface RequestError extends Error {
  status?: number;
  details?: unknown;
}

export interface ApiResponse<T> {
  data?: T;
  error?: RequestError | undefined;
}

export interface MovieResonse {
  page: number;
  total_results: number;
  total_pages: number;
  genres: Genre[];
  results: Media[];
}


export interface RenderGenreProps{
    genreIds: number[];
}

export interface childrenProvider{
    children: React.ReactNode;
}

export interface ModelProps{
    modelData: Media;
    ModelOpen: boolean;
    enableGenres: boolean;
    handleClose: () => void;
}

export interface SimilarMediaProps{
    id: number;
}