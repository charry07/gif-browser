import {useEffect, useState} from "react";
import {Tag} from "../components";
import {Box} from "@mui/material";

interface Props {
  tags: string;
  onTagClick: (tag: string) => void;
}

const STORAGE_KEY = "gif-tags-history";

export const TagsList = ({tags, onTagClick}: Props) => {
  const [previewSearches, setPreviewSearches] = useState<string[]>(() => {
    const savedTags = localStorage.getItem(STORAGE_KEY);
    return savedTags ? JSON.parse(savedTags) : [];
  });

  const handleTagClick = (tag: string) => {
    if (onTagClick) onTagClick(tag);
  };
  useEffect(() => {
    if (!tags || tags.trim() === "") return;

    const updatedTags = [tags, ...previewSearches.filter((t) => t !== tags)].slice(0, 8);
    setPreviewSearches(updatedTags);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTags));
  }, [tags]);

  return (
    <Box sx={{display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap", mb: 2}}>
      {previewSearches.map((tag, index) => (
        <Tag key={index + tag} title={tag} onClick={() => handleTagClick(tag)} />
      ))}
    </Box>
  );
};
