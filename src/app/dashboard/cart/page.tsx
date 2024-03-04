import { WidgetItem } from "@/components";
import { products, type Product } from "@/products/data/products";
import { ItemCard } from "@/shopping-cart";
import { cookies } from "next/headers";

export const metadata = {
 title: 'Carrito de compras',
 description: 'SEO Title',
};

interface ProductInCart  {
  product:  Product;
  quantity: number;
}

const getProductsInCart = ( cart: { [id:string]: number } ): ProductInCart[] => {

  const productsInCart: ProductInCart[] = [];

  for (const id of Object.keys(cart)) {
    const product = products.find( prod => prod.id === id );
    if ( product ) {
      productsInCart.push({ product: product, quantity: cart[id] })
    }
  }

  return productsInCart;
}

export default function CartPage() {

  const cookiesStore = cookies();
  const cart = JSON.parse( cookiesStore.get('cart')?.value ?? '{}' ) as { [id:string]: number };
  const productsInCart = getProductsInCart(cart);

  const totalToPay = productsInCart.reduce( 
    ( prev, current) => ( current.product.price * current.quantity ) + prev , 0 );

  return (
    <div>
      <h1 className="text-5xl">Productos en el carrito</h1>
      <hr className="mb-2" />

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {
            productsInCart.map( ({ product, quantity }) => (
              <ItemCard key={ product.id } product={product} quantity={quantity}  />
            ))
          }
        </div>
      </div>
    </div>
  );
}