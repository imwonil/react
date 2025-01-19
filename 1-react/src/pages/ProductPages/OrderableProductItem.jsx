import ProductItem from "../../components/ProductItem"
import * as MyRouter from "../../lib/MyRouter"

const OrderableProductItem = ({product, navigate}) => {
      const handleClick = () => {
        console.log(product.id)
        navigate(`/cart?id=${product.id}`)
      }

      return <ProductItem product={product} onClick = {handleClick} />

}

export default MyRouter.withRouter(OrderableProductItem)