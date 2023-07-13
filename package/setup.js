// Copyright 2022-2023 GlitchyByte
// SPDX-License-Identifier: MIT-0

// Embedded setup.

if (document.querySelector("#player") && !window.glitchyByteRedBuddyContext) {
  window.glitchyByteRedBuddyContext = {
    timerId: null
  }
  const listener = (request, sender, sendResponse) => {
    const context = window.glitchyByteRedBuddyContext
    const selectors = [
      "button.ytp-ad-skip-button-modern",   // Skip ad.
      "#dismiss-button"                     // Dismiss offer and premium offer.
    ]
    if (request.message === "toggle") {
      if (context.timerId === null) {
        context.timerId = setInterval(() => {
          for (const selector of selectors) {
            const element = document.querySelector(selector)
            if (element) {
              element.click()
            }
          }
        }, 3000)
        sendResponse({ iconOn: true })
      } else {
        clearInterval(context.timerId)
        context.timerId = null
        sendResponse({ iconOn: false })
      }
    }
  }
  chrome.runtime.onMessage.addListener(listener)
}
