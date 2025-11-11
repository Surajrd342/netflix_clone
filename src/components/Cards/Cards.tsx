import { CardProps, Genre } from "@/types";
import { Box } from "@mui/material";
import React, { useState } from "react";

const Cards: React.FC<CardProps> = ({ item, enableGenres, removeMovie }) => {
  const [genres, setgenres] = useState<Genre[]>([]);
  const [trailerKey, setTrailerKey] = useState<String | null>(null);
  const [error, setError] = useState<String | null>(null);

  const [isMute, setIsMute] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMounted, setIsmounted] = useState<boolean>(false);
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [isInLocalStorgae, setIsInLocalStorgae] = useState<boolean>(false);

  return (
    <>
      <Box>{
        isHovered && trailerKey ? (
          <Box>
            <Reactplayer/>
            <Box>
              <Button/>
            </Box>
          </Box>
        )
        }</Box>;
    </>
  );
};

export default Cards;
