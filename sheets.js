// Google Sheets Sync Module

const SHEETS_CONFIG = {
    SHEETS_API_KEY: 'YOUR_GOOGLE_API_KEY_HERE',
    SPREADSHEET_ID: 'YOUR_SHEET_ID_HERE',
    APPS_SCRIPT_URL: 'YOUR_APPS_SCRIPT_DEPLOYMENT_URL'
};

class GoogleSheetsSync {
    static async syncFarmer(farmer) {
        try {
            const response = await fetch(`${SHEETS_CONFIG.APPS_SCRIPT_URL}?action=addFarmer`, {
                method: 'POST',
                contentType: 'application/json',
                payload: JSON.stringify(farmer)
            });
            return response.json();
        } catch (error) {
            console.error('Sync error:', error);
            return { success: false };
        }
    }

    static async syncAnimalData(data) {
        try {
            const response = await fetch(`${SHEETS_CONFIG.APPS_SCRIPT_URL}?action=addAnimalData`, {
                method: 'POST',
                contentType: 'application/json',
                payload: JSON.stringify(data)
            });
            return response.json();
        } catch (error) {
            console.error('Sync error:', error);
            return { success: false };
        }
    }

    static async syncHealthRecord(record) {
        try {
            const response = await fetch(`${SHEETS_CONFIG.APPS_SCRIPT_URL}?action=addHealthRecord`, {
                method: 'POST',
                contentType: 'application/json',
                payload: JSON.stringify(record)
            });
            return response.json();
        } catch (error) {
            console.error('Sync error:', error);
            return { success: false };
        }
    }

    static async getBenchmarks(species) {
        try {
            const response = await fetch(`${SHEETS_CONFIG.APPS_SCRIPT_URL}?action=getBenchmarks&species=${species}`);
            return response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    }
}
