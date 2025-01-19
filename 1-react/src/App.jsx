import ProductPage from './pages/ProductPages'
import OrderPage from './pages/OrderPage'
import CartPage from './pages/CartPage';
import * as MyRouter from './lib/MyRouter'
import React from 'react';


import Dialog from './components/Dialog';
import Backdrop from './components/Backdrop';




const App = () => (
  <MyRouter.Router>
    <MyRouter.Routes>
      <MyRouter.Route path="/cart" element={<CartPage />} />
      <MyRouter.Route path="/order" element={<OrderPage />} />
      <MyRouter.Route path="/" element={<ProductPage />} />
    </MyRouter.Routes>
    <Backdrop>
      <Dialog/>
    </Backdrop>

  </MyRouter.Router>
)
  
export default App;

// class Header extends React.Component {

//   render(){
//     return <header>Header</header>
//   }
// }

// class Button extends React.Component {
//   handleClick = () => {
//     this.props.log('클릭')
//   }
//   render(){
//     return <button onClick={this.handleClick}>Button</button>
//   }
// }

// const withLogging = WrappedComponent => {

//   function log(message){
//     console.log(`[${getComponentName(WrappedComponent)}] ${message}`)
//   }
  
//   class WithLogging extends React.Component {
//     render(){
//       const enhancedProps = {
//         log
//       }
//       return <WrappedComponent {...this.props} {...enhancedProps}/>
//     }
//     componentDidMount(){
//      log('마운트')
//     }
//   }
//   return WithLogging
// }

// const EnhancedHeader = withLogging(Header)
// const EnhancedButton = withLogging(Button)

// export default () => (
//   <>
//   <EnhancedHeader/>
//     <EnhancedButton/>
//   </>
// )