This is a repo to demonstrate the issue with loading assets in Expo Router (version 0.0.36).

## Steps to reproduce

1. Clone this repo
2. Run `yarn`
3. Run `yarn web`
4. Open the browser and navigate to `http://localhost:19000/`
5. Open the developer console
6. Click on 'Go to /nested/123' link
7. Reload the page
8. Open the warnings tab in developer console

## Actual result

Assets (fonts) do not load, and a browser warning is shown in the warnings tab of the console:

```
Failed to decode downloaded font: http://localhost:19000/nested/assets/assets/fonts/Spartan-Black.ttf
```

## Expected result

The font assets are loaded from the correct path (see notes below), and the page is rendered correctly.

## Notes

For reference, if you reload the http://localhost:19000/login page, the font assets are loaded correctly from `http://localhost:19000/assets/assets/fonts/Spartan-Black.ttf`