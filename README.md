# Secure Password Generator

## Description

A simple Javascript application that asks the user a series of questions, then generates a secure password based on their responses. 

I made some newbie mistakes in my original attempt at this and needed to come back and make some revisions. After that, just for fun, I used ChatGPT to help me write additional code to add a `copy to clipboard` button, as well a section below the main box that displays which criteria the user selected. 

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
✅ THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
✅ THEN I select which criteria to include in the password
WHEN prompted for the length of the password
✅ THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
✅ THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
✅ THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
✅ THEN a password is generated that matches the selected criteria
WHEN the password is generated
✅ THEN the password is either displayed in an alert or written to the page
```

## How To Use

Launch index.html, click `generate password`, answer the questions, use the `copy to clipboard` button to copy to your clipboard :D :D :D 

## Screenshots

Included screenshots: `./assets/images/`
Online link: https://imgur.com/a/wS8D1F6

## Credits
Big thanks to instructor Phil Loy for walking me through this initially. 
Thanks to ChatGPT for telling me how to write the `copy to clipboard` and `display criteria` functions, as well as helping me catch a couple syntax errors.


## License

MIT License - The License file is provided here : (./LICENSE)
