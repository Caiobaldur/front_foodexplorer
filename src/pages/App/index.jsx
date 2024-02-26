import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import { Container } from "./styles"
import { DishCard } from "../../components/DishCard";

const PER_PAGE_MOBILE = 2
const PER_PAGE_DESKTOP = 4




export function App() {
  
  const slideOptions = {
      rewind : true,
      perPage: PER_PAGE_DESKTOP,
      perMove: 2,
      updateOnMove: true,
      slideFocus: true,
      gap    : '2.7rem',
      start: 1,

      width: '1122px',
      arrows: true,
      breakpoints:{

        500: {
          width: '436px',
          perPage: PER_PAGE_MOBILE,
          gap    : '1.6rem',
        }
      },
    } 

    // const arrowOptions = {

    // }
  

  
  return (
    <Container>
      <Header/>
      <Card/>
      
      <Splide options={slideOptions}>
        <h2 className="aria-labelledby">Refeição</h2>
        <SplideSlide>
          <DishCard>
            
          </DishCard>
        </SplideSlide>
        <SplideSlide>
          <DishCard>
            
          </DishCard>
        </SplideSlide>
        <SplideSlide>
          <DishCard>
            
          </DishCard>
        </SplideSlide>
        <SplideSlide>
          <DishCard>
            
          </DishCard>
        </SplideSlide>
      </Splide>


    </Container>
  )
}