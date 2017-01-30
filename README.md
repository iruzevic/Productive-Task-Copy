## Install Tampermonkey browser extension

Quick add task to clipboard for faster copying to time entry.
* format: "#id - task title" ("#580 - Disable with submit")

#### Setup
* Add script
* Turn on
* Add this to settings.
  * Run at: "document-idle"
  * User Include: "/(^https:\/\/app\.productive\.io\/1-infinum\/tasks?\?.*?$)/"
