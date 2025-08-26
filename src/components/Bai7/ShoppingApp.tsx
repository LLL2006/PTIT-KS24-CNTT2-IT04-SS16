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
          image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-oppo-find-n5_h_nh_2.png'        
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