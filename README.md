## Install Tampermonkey browser extension

Quick add task to clipboard for faster copying to time entry.
* format: "#id - task title"
* example: "#580 - Disable with submit"

#### Setup
* Install Tampermonkey browser extension.
* Add script and turn on.
* Add this to settings:
  * Run at: "document-idle"
  * User Include: "/(^https:\/\/app\.productive\.io\/1-infinum\/tasks?\?.*?$)/"
