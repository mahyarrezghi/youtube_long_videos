# YouTube Long Videos Filter

## Introduction

The **YouTube Long Videos Filter** is a Chrome extension that allows users to filter YouTube videos based on their duration. Users can specify a minimum video length, and the extension will automatically hide videos shorter than that length, enhancing the viewing experience for those who prefer longer content.

## Features

- Automatically filters YouTube videos based on user-defined duration.
- Users can set the minimum video length in minutes directly from the extension's popup UI.
- Persistent settings using Chrome's storage API, so preferences remain even after restarting the browser.
- Real-time filtering as new videos load dynamically on the page.

## Installation

1. **Download or Clone the Repository**: 
   - Clone the repository.
   - Alternatively, download the ZIP file from the repository and extract it.

2. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" in the top right corner.
   - Click on "Load unpacked" and select the folder where the extension files are located.

3. **Test the Extension**:
   - After loading the extension, navigate to YouTube and use the extension to filter videos by duration.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. Enter the desired minimum video duration in minutes in the input field.
3. Click the "Apply Filter" button.
4. The extension will automatically hide videos shorter than the specified duration.