import { Container, FavButton} from "./styles";
import { MdFavoriteBorder } from "react-icons/md";





export function DishCard() {

  return (
    <Container>
      <FavButton>
        <MdFavoriteBorder />
      </FavButton>
      <img src="./src/assets/Mask_group.png" alt="" />
      
    </Container>
  );
}