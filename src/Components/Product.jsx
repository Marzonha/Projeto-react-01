import { ProductContent } from "./ProductContent"

function Product(props) {
  return (
    <div>
      <h1>{props.nomePagina}</h1>
      <p>{props.paginaPrincipal}</p>

      <ProductContent/>
    </div>
  )
}

export default Product