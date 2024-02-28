import { DishIncludeButton } from "./style"


export function IncludeButton(props) {
  return(
    <DishIncludeButton>
      <span>{props.title}</span>
    </DishIncludeButton>
  )
}