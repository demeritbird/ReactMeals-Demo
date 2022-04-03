import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    function showCarthandler(props) {
        setCartIsShown(true);
    }
    function hideCarthandler(props) {
        setCartIsShown(false);
    }

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCarthandler} />}
            <Header onShowCart={showCarthandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
