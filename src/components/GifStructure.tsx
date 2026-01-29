import {Card, CardMedia, CardContent, Typography, Box, Avatar, IconButton, Chip} from "@mui/material";
import {OpenInNew} from "@mui/icons-material";
import type {Gif} from "../Interfaces";

interface Props {
  gif: Gif;
}

export const GifStructure = ({gif}: Props) => {
  return (
    <Card
      sx={{
        width: 300,
        borderRadius: 2,
        overflow: "hidden",
        transition: "all 0.3s ease",
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "gray",
        "&:hover": {transform: "translateY(-4px)", boxShadow: 6, borderColor: "primary.main"},
      }}>
      {/* Image Container */}
      <Box sx={{position: "relative", height: 300}}>
        <CardMedia component='img' image={gif.images.fixed_width.url} alt={gif.title} sx={{width: "100%", height: "100%", objectFit: "cover"}} />

        {/* Open Button */}
        <IconButton
          component='a'
          href={gif.url}
          target='_blank'
          size='small'
          sx={{position: "absolute", top: 8, right: 8, bgcolor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(8px)", color: "white", "&:hover": {bgcolor: "rgba(0, 0, 0, 0.8)"}}}>
          <OpenInNew fontSize='small' />
        </IconButton>

        {/* Sticker Badge */}
        {gif.is_sticker === 1 && <Chip label='Sticker' size='small' sx={{position: "absolute", top: 8, left: 8, bgcolor: "secondary.main", color: "white", fontWeight: 600}} />}
      </Box>

      {/* Content */}
      <CardContent sx={{p: 2}}>
        <Typography
          variant='body1'
          sx={{fontWeight: 600, mb: 1.5, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", minHeight: "3em"}}>
          {gif.title || "Untitled"}
        </Typography>

        {/* User */}
        {gif.user ? (
          <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
            <Avatar src={gif.user.avatar_url} sx={{width: 28, height: 28}} />
            <Box sx={{minWidth: 0, flex: 1}}>
              <Typography variant='body2' sx={{fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                {gif.user.display_name}
              </Typography>
            </Box>
          </Box>
        ) : (
          gif.username && (
            <Typography variant='body2' color='text.secondary' sx={{fontWeight: 500}}>
              @{gif.username}
            </Typography>
          )
        )}
      </CardContent>
    </Card>
  );
};
