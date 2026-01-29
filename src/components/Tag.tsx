import {Button} from "@mui/material";

interface Props {
  title: string;
  onClick?: () => void;
}

export const Tag = ({title = "", onClick}: Props) => {
  return <Button variant='outlined' onClick={onClick}>{title}</Button>;
};
