import { Button } from "../Button";
import { Container, Logout, MobileReceipt, MenuMobile } from "./styles";
import { PiReceiptBold } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";
import { HiOutlineMenu } from "react-icons/hi";


export function Header() {
  
  return (
    <Container>
      <div className="content">
        <MenuMobile>
          <HiOutlineMenu />
        </MenuMobile>


        <div className="logo">
          <img src="../src/assets/Polygon1.svg" alt="" />
          <h1>food explorer</h1>
        </div>
        
        <div className="search">
          <label>
            <input type="search" placeholder="Busque por pratos ou ingredientes"/>
          </label>  
        </div>

        <div className="final">

            <Button/> 
          <Logout>
            <GoSignOut/>
          </Logout>
        </div>
    <MobileReceipt>
      <span>0</span>
      <PiReceiptBold/>
    </MobileReceipt>

    </div>
  </Container>
  )
}