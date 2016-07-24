# sports-live-gfx
##### Sports live-casting graphics for use with OBS and Scoreboard Assistant
# How To Use
1. Place [Scoreboard Assistant ](https://obsproject.com/forum/resources/scoreboard-assistant.112/) (Non-Free) and all associated files in the sports-live-gfx folder.
2. Add **lowerthirdsports.html** to OBS via the [Browser Plugin](https://obsproject.com/forum/resources/browser-plugin.115/)
3. Manipulate Scores and names with Scoreboard Assistant and see magic
# TODO
- Remove dependence on non-free Scoreboard Assistant
- Implement better clock backend. Perferably one that doesn't write to disk every second.
- Clean up CSS
- Learn / Optimize JS

# Notes
- XSS is disabled in Chrome by deafult. Either use Mozilla FireFox or the Browser Plugin for OBS to change scores.
- This is my first attempt at JS, CSS and HTML. I apologize in advance for spaghetti code.
# License
Execpt for:
- backing.png - by Jason Chua, Copyright Cooper City High School 2016
- jquery-3.0.0.min.js - jQuery Foundation, MIT License
- velocity.min.js - 2014 Julian Shapiro MIT License
This project is is licensed under the Mozilla Public License 2.0