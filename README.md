# Red Buddy

## No more :(

YouTube skip buttons no longer recognize synthetic clicks. They go up the event stack and check for trusted source, so even synthetic events that would create a stack do not work. At least from the research time I'm willing to put into it. So I'm abandoning this. It served well while it lasted.

[The one for Twitch](https://github.com/GlitchyByte/purple-buddy) still works though. Collect those channel points!

I'll leave the repo for now in case someone is curious.

---
![Version](https://img.shields.io/badge/Version-1.4.6-blue)
![Deprecated](https://img.shields.io/badge/Deprecated-brown)

Chrome extension for auto-skipping [YouTube](https://youtube.com/) ads. **This is NOT an ad-blocker**, it will simply press `skip` when it's available. It will also press `dismiss` on trial popups.

---
## Install from the Chrome Web Store

[Go to the Chrome Web Store!](https://chrome.google.com/webstore/detail/red-buddy/djnhoajhifdcfhbbhijnpinbdkgdkppf)

URL: https://chrome.google.com/webstore/detail/red-buddy/djnhoajhifdcfhbbhijnpinbdkgdkppf

---
## Installing from source

Clone the repository:

    git clone git@github.com:GlitchyByte/red-buddy.git

Or [download a zip](https://github.com/GlitchyByte/red-buddy/archive/refs/heads/main.zip).

Then:

1. Open Chrome.
2. Go to `Window | Extensions`, make sure `Developer mode` is on.
3. `Load unpacked` and select the `package` directory.

---
## How to use

Just click on it to enable the extension (you should see the skip icon turn white) and your are set.
