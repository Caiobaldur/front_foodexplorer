import { Container } from "./styles";

export function Header() {
  
  return (
  <Container>
    <div className="content">
          <img src="../src/assets/Polygon1.svg" alt="" />
        <div className="search">
          <h1>food explorer</h1>
        <label>
          <input type="search" placeholder="Busque por pratos ou ingredientes"/>
        </label>  
          <button><img src="../src/assets/Receipt.png" alt="" />Pedidos (0)</button> 
        </div>
        <a href="">
          <img src="../src/assets/SignOut.svg" alt="" />
        </a>
    </div>
  </Container>
  )
}