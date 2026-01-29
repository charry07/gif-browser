import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import { IconButton, Box } from '@mui/material';

const socialMedia = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/charry07",
    Icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    url: "https://github.com/charry07",
    Icon: GitHubIcon,
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/15453981/charry07",
    Icon: CodeIcon,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/4Charry07",
    Icon: FacebookIcon,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/4charry07",
    Icon: InstagramIcon,
  },
];

export const Icons = () => {
  return (
    <Box className='social-icon' sx={{ display: 'flex', gap: 1 }}>
      {socialMedia.map((item, index) => {
        const IconComponent = item.Icon;
        return (
          <IconButton
            key={index}
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={item.name}
            sx={{ color: 'inherit' }}
          >
            <IconComponent />
          </IconButton>
        );
      })}
    </Box>
  );
};
