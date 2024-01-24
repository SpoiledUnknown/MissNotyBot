import '../styles/modern-normalise.css'
import '../styles/style.css'
import '../styles/components/header.css'
import '../styles/components/hero.css'
import '../styles/components/about.css'
import '../styles/components/features.css'
import '../styles/components/contact.css'
import '../styles/components/footer.css'
import '../styles/components/mobile-navigation.css'
import '../styles/utils.css'

import HandleImageLoading from './utils/lazy-loading'
import FooterText from './utils/footer'
import TurnLightModeOn from './utils/night-mode'
import MobileNavigation from './utils/mobile-navigation'

HandleImageLoading()
FooterText()
TurnLightModeOn()
MobileNavigation()