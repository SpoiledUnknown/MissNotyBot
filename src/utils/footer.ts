function FooterText()
{
    document.querySelector('.footer__title')!.innerHTML = "Copyright © " + (new Date().getFullYear()) + " Spoiled Unknown. All rights reserved" + " || <a>Version 1.1.3</a>"
}

export default FooterText