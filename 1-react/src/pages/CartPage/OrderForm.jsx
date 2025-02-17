import React from "react";
import FormControl from "../../components/FormControl"



class OrderForm extends React.Component{
  constructor(props){
    super(props)


    this.formRef = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getInputValueByName(name){
    if (!this.formRef.current) return ;
    const inputElement = this.formRef.current.elements.namedItem(name)

    if(!inputElement) return ""
    return inputElement.value
  }
  
 handleSubmit(e) {

    e.preventDefault();
   console.log(this.formRef.current)
    const deliveryAddress = this.getInputValueByName('deliveryAddress')
   const deliveryContact = this.getInputValueByName('deliveryContact')
  const paymentMethod = this.getInputValueByName('paymentMethod')
   const messageToShop = this.getInputValueByName('messageToShop')
    const messageToRider = this.getInputValueByName('messageToRider')
   
    console.log("submit", deliveryAddress, deliveryContact,  paymentMethod, messageToShop, messageToRider)
   
  }

  componentDidMount(){

  }

  render(){
    
    return (

      <form className="OrderForm" id="order-form" onSubmit={this.handleSubmit} ref={this.formRef}>

    <FormControl label="주소" htmlFor={"deliveryAddress"} required>
      <input type = "text" name="deliveryAddress" id ="deliveryAddress" placeholder="배달받을 주소를 입력하세요" required autoFocus />
    </FormControl>

        <FormControl label="연락처" htmlFor={"deliveryContact"} required>
          <input type = "text" name="deliveryContact" id ="deliveryContact" placeholder="연락처를 입력하세요" required pattern="^\d{2,3}-\d{3,4}-\d{4}$"/>
        </FormControl>


        <FormControl label="결제수단" htmlFor={"paymentMethod"} required>
       <select name="paymentMethod" id = "paymentMethod" >
       <option value = "마이페이">마이페이</option>
         <option value = "만나서 결제">만나서 결제</option>
       </select>
        </FormControl>

          <FormControl label="가게 사장님께" htmlFor={"messageToShop"}>
        <textarea name="messageToShop" id="messageToShop"/>
            </FormControl>
        <FormControl label="라이더님께" htmlFor={"messageToRider"}>
          <textarea name="messageToRider" id="messageToRider"/>
              </FormControl>


    </form>
      )
  }
  
}

export default OrderForm