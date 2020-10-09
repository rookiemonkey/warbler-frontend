import React from 'react';

const Footer = () => {

    return (
        <footer class="page-footer font-small blue pt-4">
            <div class="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright:
                &nbsp;
                <img src="/images/logo.png" alt="Warbler"></img> Warbler
            </div>
        </footer>
    )
}

export default Footer;