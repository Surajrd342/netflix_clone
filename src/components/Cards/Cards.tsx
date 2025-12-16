import { CardProps, Genre } from "@/types";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Reactplayer from "react-player";
import Button from "../Button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cards: React.FC<CardProps> = ({ item, enableGenres, removeMovie }) => {
  const [genres, setgenres] = useState<Genre[]>([]);
  const [trailerKey, setTrailerKey] = useState<String | null>(null);
  const [error, setError] = useState<String | null>(null);

  const [isMute, setIsMute] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMounted, setIsmounted] = useState<boolean>(false);
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [isInLocalStorage, setIsInLocalStorage] = useState<boolean>(false);

  const handleOpen = () => setModelOpen(true);
  const handleClose = () => setModelOpen(false);

  const router = useRouter();
  const { title, vote_average, genre_id, backdrop_path } = item;

  useEffect(() => {
    setIsmounted(true);
    setIsInLocalStorage(false);
  }, [item, enableGenres]);

  return (
    <>
      <Box>
        {isHovered && trailerKey ? (
          <Box>
            <Reactplayer />
            <Box>
              <Button />
            </Box>
          </Box>
        ) : (
          <Image />
        )}
        <Box>
          <Box>
            <Typography>{title}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cards;
