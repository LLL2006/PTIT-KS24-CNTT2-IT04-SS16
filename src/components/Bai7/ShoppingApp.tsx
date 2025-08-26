import React, { Component } from 'react'
import CartPanel from './CartPanel';
import Header from './Header';
import ProductCard from './ProductCard';

export default class ShoppingApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      isCartOpen: false,
      products: [
        {
          id: 1,
          name: 'Điện thoại Samsung Galaxy',
          price: 20000000,
          image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25_1__2.png'
        },
        {
          id: 2,
          name: 'Điện thoại Iphone14 Promax',
          price: 20500000,
          image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25-ultra_3__3.png'
        },
        {
          id: 3,
          name: 'Điện thoại Samsung Galaxy',
          price: 21000000,
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT9cxiwl4McemN6TfTJuSlmApLmH5rV_f9n2uFO7l3xgDb1KTiP8i8x3OFsoAifLABgtYYM1Vx5x4WQW8XBcb2wxhRw9u62tWJLWXIrc_ffj8QBJJbpdMmnfKZVgyUntwdYbYPEzEpa&usqp=CAc'
        },
        {
          id: 4,
          name: 'Điện thoại Iphone11 Promax',
          price: 21500000,
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQpsV12AeHZHPbTFiqGCvCrHN2WV0WAVJ-T3toNtwfEqXQlFuOdBraLqVXOTBy_a7wO6th7jdJI6zLE94Ipi-bHjS481EtQNXeXVckt5wtjKQ1FSPn8EUDmD5WoLx9-5tXS7Gxt6g&usqp=CAc'
        },
        {
          id: 5,
          name: 'Điện thoại Samsung Galaxy',
          price: 22000000,
          image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQsJDgxHG1Cz9_Loww1NGKfoYJ3WOkijdLdkQVz94lzUftQ1AoKOaFng4qGW1SdCy-jmNrZRBzdJHoZ_5fBn4IfwF6x3ovVGQMJJsGH1AqgMqOrQDp1HHrgAO3rZD78giOsR3Vc_fU&usqp=CAc'
        },
        {
          id: 6,
          name: 'Điện thoại Samsung Galaxy',
          price: 22500000,
          image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxd5qAWEzXGi8o-Ayaq7TANlL8_4SVc3S6w_J0f3kDnFeHtgJhCoVlFhrSDo-27xrfKGx7T1qwpdag3ICnKsqGESPb27_zTQdfaSCUekt8J4UCJIrnpg2LDLHcrNDUQK3WIwVtlw&usqp=CAc'
        },
        {
          id: 7,
          name: 'Điện thoại Oppo A9',
          price: 23000000,
          image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTuns3siX1d1hbzsu20ZDowTMVCPLx3kOtuhLXZWPJLV9CKxWzLzaox5HbFyoMvIRkf4DhQ0aNnVUy4FFV_E0S1rWckCdELUEr_j4bQIOzftovJe-T8AyGcE-EF&usqp=CAc'
        },
        {
          id: 8,
          name: 'Điện thoại Oppo V5',
          price: 23500000,
          image: 'data:image/jpeg;base64,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'
        }
      ]
    };
  }

  addToCart = (product) => {
    const existingItem = this.state.cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      this.updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      this.setState({
        cartItems: [...this.state.cartItems, { ...product, quantity: 1 }]
      });
    }
  }

  updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      this.removeItem(productId);
      return;
    }
    
    this.setState({
      cartItems: this.state.cartItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    });
  }

  removeItem = (productId) => {
    this.setState({
      cartItems: this.state.cartItems.filter(item => item.id !== productId)
    });
  }

  toggleCart = () => {
    this.setState({ isCartOpen: !this.state.isCartOpen });
  }

  getTotalAmount = () => {
    return this.state.cartItems.reduce((total, item) => 
      total + (item.price * item.quantity), 0
    );
  }

  getTotalItems = () => {
    return this.state.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  render() {
    const containerStyle = {
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    };

    const mainContentStyle = {
      position: 'relative',
      transition: 'margin-right 0.3s ease',
      marginRight: this.state.isCartOpen ? '400px' : '0'
    };

    const gridStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '20px',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    };

    const overlayStyle = {
      position: 'fixed',
      top: '60px', // Start below header
      left: 0,
      right: this.state.isCartOpen ? '400px' : '0',
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      zIndex: 999,
      display: this.state.isCartOpen ? 'block' : 'none'
    };

    return (
      <div style={containerStyle}>
        <Header 
          cartCount={this.getTotalItems()}
          onToggleCart={this.toggleCart}
        />
        
        <div style={mainContentStyle}>
          <div style={gridStyle}>
            {this.state.products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={this.addToCart}
              />
            ))}
          </div>
        </div>

        <CartPanel
          isOpen={this.state.isCartOpen}
          cartItems={this.state.cartItems}
          onUpdateQuantity={this.updateQuantity}
          onRemoveItem={this.removeItem}
          totalAmount={this.getTotalAmount()}
          onClose={this.toggleCart}
        />

        <div 
          style={overlayStyle}
          onClick={this.toggleCart}
        />
      </div>
    );
  }
}