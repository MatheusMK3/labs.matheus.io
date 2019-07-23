/**
 * labs.matheus.io - Labs Utility Script
 * Created by Matheus Pratta
 */

window.LabsUtility = new (function LabsUtility () {
  // Gets the current script location and path
  this.url = document.currentScript.src
  this.path = this.url.split('/').slice(0, -1).join('/')

  // My social links :)
  let socialLinks = [
    { url: 'https://github.com/matheusmk3', title: 'GitHub', icon: 'fab fa-github' },
    { url: 'https://www.linkedin.com/in/matheus-pratta/', title: 'LinkedIn', icon: 'fab fa-linkedin' },
    { url: 'https://labs.matheus.io', title: 'Labs', icon: 'fa fa-flask' },
    { url: 'https://twitter.com/matt_pratta', title: 'Twitter', icon: 'fab fa-twitter' },
    { url: 'https://www.instagram.com/matt_pratta/', title: 'Instagram', icon: 'fab fa-instagram' },
  ]

  // FontAwesome
  let libFontAwesome = document.createElement('script')
  libFontAwesome.setAttribute('async', true)
  libFontAwesome.setAttribute('defer', true)
  libFontAwesome.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/js/all.min.js')
  document.head.append(libFontAwesome)

  // Loads the styles
  let labsStyles = document.createElement('link')
  labsStyles.setAttribute('rel', 'stylesheet')
  labsStyles.setAttribute('href', `${this.path}/labs-utility.css`)
  document.head.append(labsStyles)

  // Creates the menu
  let labsMenu = document.createElement('div')
  labsMenu.className = 'labs-menu'

  // Creates the menu container
  let labsMenuContainer = document.createElement('div')
  labsMenuContainer.className = 'labs-menu-container'
  labsMenu.append(labsMenuContainer)

  // Checks for Bootstrap, so we use it's container class. If we don't have it, use a custom size
  if (typeof bootstrap != 'undefined')
    labsMenuContainer.classList.add('container')
  else
    labsMenuContainer.classList.add('labs-menu-custom')

  // Creates the logo
  let labsMenuLogo = document.createElement('a')
  labsMenuLogo.className = 'labs-menu-logo'
  labsMenuLogo.setAttribute('href', 'https://labs.matheus.io')
  labsMenuLogo.setAttribute('target', '_blank')
  labsMenuContainer.append(labsMenuLogo)

  // Creates the title bar
  let labsMenuTitle = document.createElement('h1')
  labsMenuTitle.className = 'labs-menu-title'
  labsMenuTitle.innerText = document.title
  labsMenuContainer.append(labsMenuTitle)

  // Set title function
  this.setTitle = title => { labsMenuTitle.innerText = title }

  // Creates the social links
  let labsMenuSocial = document.createElement('div')
  labsMenuSocial.className = 'labs-menu-social'
  labsMenuContainer.append(labsMenuSocial)

  // Inserts social links
  for (let iSocialLink = 0, socialLink; socialLink = socialLinks[iSocialLink++];) {
    let labsMenuSocialLink = document.createElement('a')
    labsMenuSocialLink.setAttribute('href', socialLink.url)
    labsMenuSocialLink.setAttribute('title', socialLink.title)
    labsMenuSocial.append(labsMenuSocialLink)

    let labsMenuSocialIcon = document.createElement('i')
    labsMenuSocialIcon.className = socialLink.icon
    labsMenuSocialLink.append(labsMenuSocialIcon)
  }

  // Prepends menu to the document
  document.body.prepend(labsMenu)
})