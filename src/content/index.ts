/// <reference types="chrome"/>

const preview = document.createElement('div')
preview.id = 'dsh-preview'
const body = document.getElementsByTagName('body')[0]
body.appendChild(preview)

const icon = document.createElement('div')
icon.id = 'dsh-icon'
const svg = document.createElement('img')
svg.src = chrome.extension.getURL('img/webIcon.svg')
icon.appendChild(svg)

let currentShot = null
let iconShot = null
let img = document.createElement('img')
let video = document.createElement('video')
let showingPreview = false

const showPreview = () => {
  iconShot = currentShot
  const videoURL = iconShot.getAttribute('data-video-teaser-xlarge')
  if (videoURL) {
    video.src = videoURL
    video.autoplay = true
    video.loop = true
    video.muted = true
    video.addEventListener('loadeddata', () => {
      preview.innerHTML = ''
      if (!iconShot || iconShot !== currentShot) return
      preview.appendChild(video)
    })
    return
  }
  const imgEl = currentShot.querySelector('img')
  let picUrl = imgEl.getAttribute('data-animated-url')
  if (!picUrl) picUrl = imgEl.getAttribute('src').split('?')[0]
  img.src = `${picUrl}?compress=1${picUrl.includes('.gif') ? '' : '&resize=1200x900'}`
  img.onload = () => {
    preview.innerHTML = ''
    if (!iconShot || iconShot !== currentShot) return
    preview.appendChild(img)
  }
}

const onHover = (e) => {
  const target = e.target as HTMLElement
  if ([...target.classList].includes('js-boosted-shot-link')) return;
  if (target.id === 'dsh-icon') {
    if (showingPreview) return
    showingPreview = true
    return showPreview()
  } else {
    showingPreview = false
  }
  const shot = target.closest('.dribbble')
  if (shot) {
    preview.innerHTML = ''
    iconShot = null
    currentShot = shot
    currentShot.appendChild(icon)
    return
  }
  preview.innerHTML = ''
  currentShot && currentShot.removeChild(icon)
  currentShot = null
  iconShot = null
}

const activate = (active) => {
  active ? body.addEventListener('mousemove', onHover) : body.removeEventListener('mousemove', onHover)
}

chrome.runtime.onMessage.addListener(({ active }) => activate(active));
chrome.storage.sync.get(["active"], ({ active = true }) => activate(active));

export { }