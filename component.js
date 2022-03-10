class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML =
        <navbar class = "navbar">
        <div class = "navbar-container">
            <div class = "navbar-logo">
                <a href="index.html"><img src="./logo/socialized-logo.svg" alt="logo"></a>
            </div>
            <div class = "navbar-links">
                <a href="about-us.html">About us</a>
                <a href="sign-up.html">Sign up</a>
            </div>
        </div>
    </navbar>
    

    }
}

customElements.define('navbar', Navbar);