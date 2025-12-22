// Service to handle news reader counting via Google Apps Script

interface NewsCounts {
  [newsId: string]: {
    clicks: number;
    reads: number;
  }
}

// IMPORTANT: Replace this URL with your deployed Google Apps Script Web App URL
// It should look like: https://script.google.com/macros/s/AKfycbx.../exec
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzf9sYqxZ2Hkb-_BkTvR1mXcyarMvY6WpzRn37u-_zTn5fKCh9ntiot0ljb1MQ0G9UQVw/exec';

const VIEWED_KEY = 'chess_club_news_viewed';

export const NewsCounterService = {
  // Fetch all counts from the backend
  getCounts: async (): Promise<NewsCounts> => {
    if (GOOGLE_SCRIPT_URL.includes('REPLACE_WITH')) {
        console.warn("NewsCounter: Google Script URL not set. Using empty data.");
        return {};
    }

    try {
      const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=get`);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch news counts:", error);
      return {};
    }
  },

  // Increment click count (Unique per user)
  incrementClick: async (newsId: string): Promise<void> => {
    if (GOOGLE_SCRIPT_URL.includes('REPLACE_WITH')) return;

    // Check if user has already viewed this news locally
    const viewedStored = localStorage.getItem(VIEWED_KEY);
    const viewed = viewedStored ? JSON.parse(viewedStored) : [];

    if (!viewed.includes(newsId)) {
       // Mark as viewed locally
       viewed.push(newsId);
       localStorage.setItem(VIEWED_KEY, JSON.stringify(viewed));

       // Send increment request to backend
       try {
         // Using 'no-cors' mode for simplicity with GAS, though standard GET usually works.
         // 'no-cors' means we won't get a readable response, but the request is sent.
         await fetch(`${GOOGLE_SCRIPT_URL}?action=click&id=${encodeURIComponent(newsId)}`, {
             method: 'GET',
             mode: 'no-cors' 
         });
       } catch (error) {
         console.error("Failed to increment click:", error);
       }
    }
  },

  // Increment read count
  incrementRead: async (newsId: string): Promise<void> => {
    if (GOOGLE_SCRIPT_URL.includes('REPLACE_WITH')) return;

    try {
        await fetch(`${GOOGLE_SCRIPT_URL}?action=read&id=${encodeURIComponent(newsId)}`, {
            method: 'GET',
            mode: 'no-cors'
        });
    } catch (error) {
        console.error("Failed to increment read:", error);
    }
  }
};