import HeaderButton
 from "./Buttons/HeaderButton";
let Header = () => {
    return (
        <header>
            <img id='header-logo' src='./assets/images/header-logo-white.png'/>
            <div>
                <HeaderButton text='Home' link='/'/>
                <HeaderButton text='About' link='/about'/>
                <HeaderButton text='Shop' link='/shop'/>
                
            </div>
        </header>
    );
}

export default Header;
/*
<li><a href="/">Home</a></li>
<li><a href="/about">About</a></li>
<li><a href="/shop">Shop</a></li>
*/