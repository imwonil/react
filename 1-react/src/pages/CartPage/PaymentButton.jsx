import Button from "../../components/Button"
import * as MyRouter from "../../lib/MyRouter"
const PaymentButton = () => {
         
  return(
     <MyRouter.routerContext.Consumer>
       {({changePath})=>{
           const handleClick = () => {
                   changePath("/order")
            }

                 return <Button onClick = {handleClick} styleType = {'brand-solid'} block form ="order-form" style = {{padding : "12px 0"}}>결제하기</Button>
                 }}
               </MyRouter.routerContext.Consumer>
  )

}



export default PaymentButton

