// Copyright 2022 GlitchyByte
// SPDX-License-Identifier: MIT-0

// Embedded setup.

if (document.querySelector("#player") && !window.glitchyByteMainFrameContext) {
    // Define.
    class GlitchyByteMainFrameContext {

        constructor() {
            this.timerId = null
            const listener = (request, sender, sendResponse) => {
                switch (request.message) {
                    case "toggle": return this.toggle(request, sendResponse)
                }
            }
            chrome.runtime.onMessage.addListener(listener.bind(this))
        }

        toggle(request, sendResponse) {
            if (this.timerId == null) {
                this.timerId = setInterval(() => {
                    const a = document.querySelector("button.ytp-ad-skip-button")
                    if (a) a.click()
                    const d = document.querySelector("#dismiss-button > a")
                    if (d) d.click()
                }, 3000)
                sendResponse({ iconOn: true })
            } else {
                clearInterval(this.timerId)
                this.timerId = null
                sendResponse({ iconOn: false })
            }
        }
    }
    // Initialize.
    window.glitchyByteMainFrameContext = new GlitchyByteMainFrameContext()
}
