import {Typography} from "@mui/material";
import '../App.css';

interface Props {
  title: string;
  description?: string;
  logo?: string;
}

export const Header = ({title, description, logo}: Props) => {
  return (
    <>
      <header>
        {logo && <img className='logo' src={logo} alt='logo' style={{height: "50px"}} />}
        <Typography variant='h1' color='primary'>
          {title}
        </Typography>
        {description && <Typography variant='h5' color='secondary' gutterBottom>
          {description}
        </Typography>}
      </header>
    </>
  );
};
