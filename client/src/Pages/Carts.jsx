import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import EmptyCart from '../Components/Cart/EmptyCart/EmptyCart'
import Cart from '../Components/Cart/Cart'

const Carts = (props) => {
  const {isBooksPage} = props
  const fakeDate =[{
    name:'The Diary of a Young Girl',
    author :'Anne Frank',
    date: '4-10-2020',
    quantity: 1,
    id:1,
    price:50,
    imageUrl :'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9789352782772_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
  },
  {
    name:'The Diary of a Young Girl',
    author :'Anne Frank',
    date: '4-10-2020',
    quantity: 1,
    id:2,
    price:70,
    imageUrl :'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9789352782772_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
  }]
  return (
    <div>
      <Navbar isBooksPage={isBooksPage} />
      { fakeDate.length? <Cart fakeDate={fakeDate}/> :<EmptyCart/> }
    </div>
  )
}

export default Carts
