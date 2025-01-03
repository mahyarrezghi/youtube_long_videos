function filterVideos(minDuration) {
  const videos = document.querySelectorAll(
    "ytd-rich-item-renderer, ytd-video-renderer, ytd-compact-video-renderer",
  );
  videos.forEach((video) => {
    const timeText = video.querySelector("#text[aria-label]");
    if (timeText) {
      const time = timeText.innerText;
      const duration = parseDuration(time);
      if (duration < minDuration) {
        video.style.display = "none"; // Hide videos shorter than the specified duration
      } else {
        video.style.display = ""; // Show videos longer than the specified duration
      }
    }
  });
}

function parseDuration(duration) {
  const timeParts = duration.split(":").reverse();
  let totalMinutes = 0;
  timeParts.forEach((part, index) => {
    totalMinutes += parseInt(part) * Math.pow(60, index);
  });
  return totalMinutes / 60; // Convert seconds to minutes
}

// Function to check if the current URL is a creator's page
function isCreatorPage() {
  return window.location.href.includes("@");
}

// Function to check if the current URL is a search results page
function isSearchPage() {
  return window.location.href.includes("search");
}

// Retrieve the minimum duration from storage and filter videos
chrome.storage.sync.get("minDuration", (data) => {
  const minDuration = data.minDuration || 30; // Default to 30 minutes if not set

  // Check if we are on a creator's page or a search page
  if (!isCreatorPage() && !isSearchPage()) {
    filterVideos(minDuration);
  }
});

// Set up a MutationObserver to watch for changes in the video list
const observer = new MutationObserver(() => {
  chrome.storage.sync.get("minDuration", (data) => {
    const minDuration = data.minDuration || 30; // Default to 30 minutes if not set

    // Check if we are on a creator's page or a search page
    if (!isCreatorPage() && !isSearchPage()) {
      filterVideos(minDuration);
    }
  });
});

// Observe changes to the body of the document
observer.observe(document.body, { childList: true, subtree: true });
