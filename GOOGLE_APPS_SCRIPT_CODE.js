// ==========================================
// CODE FOR GOOGLE APPS SCRIPT
// ==========================================
// 1. Go to https://script.google.com/home
// 2. Click "+ New Project"
// 3. Delete any code in "Code.gs" and paste THIS entire content.
// 4. Click "Deploy" -> "New deployment".
// 5. Select type: "Web app".
// 6. Description: "News Counter".
// 7. Execute as: "Me" (your email).
// 8. Who has access: "Anyone" (IMPORTANT!).
// 9. Click "Deploy" and COPY the "Web app URL".
// 10. Paste that URL into 'chess-club-sion-v2/src/services/NewsCounterService.ts'.

function doGet(e) {
  const props = PropertiesService.getScriptProperties();
  const action = e.parameter.action;
  const id = e.parameter.id;
  
  // ----------------------------------------------------
  // ACTION: GET ALL COUNTS
  // ----------------------------------------------------
  if (action === 'get') {
    const data = props.getProperties();
    const result = {};
    
    // Convert flat properties "Title_###_clicks" to nested object
    for (const key in data) {
      const parts = key.split('_###_');
      if (parts.length === 2) {
        const title = parts[0];
        const type = parts[1]; // 'clicks' or 'reads'
        
        if (!result[title]) {
          result[title] = { clicks: 0, reads: 0 };
        }
        
        result[title][type] = parseInt(data[key], 10) || 0;
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  // ----------------------------------------------------
  // ACTION: INCREMENT (Click or Read)
  // ----------------------------------------------------
  if (action === 'click' || action === 'read') {
    if (!id) {
      return ContentService.createTextOutput(JSON.stringify({ error: "Missing ID" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Key format: "Title_###_clicks" or "Title_###_reads"
    const key = id + '_###_' + (action === 'click' ? 'clicks' : 'reads');
    
    // Use lock to prevent race conditions (multiple people clicking at once)
    const lock = LockService.getScriptLock();
    try {
      lock.waitLock(10000); // Wait up to 10 seconds for the lock
      
      let current = parseInt(props.getProperty(key) || '0', 10);
      current++;
      props.setProperty(key, current.toString());
      
      return ContentService.createTextOutput(JSON.stringify({ status: "success", [action]: current }))
        .setMimeType(ContentService.MimeType.JSON);
        
    } catch (e) {
      return ContentService.createTextOutput(JSON.stringify({ error: "Could not acquire lock" }))
        .setMimeType(ContentService.MimeType.JSON);
    } finally {
      lock.releaseLock();
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify({ error: "Invalid action" }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Helper function to setup CORS if needed (though doGet usually handles it for simple GETs)
function doPost(e) {
  return doGet(e);
}
