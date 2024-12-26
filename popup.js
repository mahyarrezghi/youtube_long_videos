document.getElementById('filter').addEventListener('click', () => {
    const minDuration = document.getElementById('minDuration').value;
    if (minDuration) {
        // Store the value in Chrome's storage
        chrome.storage.sync.set({ minDuration: parseInt(minDuration) }, () => {
            console.log('Minimum duration set to ' + minDuration + ' minutes');
        });
    }
});