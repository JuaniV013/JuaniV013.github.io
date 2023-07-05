// Reemplaza 'YOUR_SPREADSHEET_ID' con el ID de tu hoja de cálculo de Google Sheets
const SPREADSHEET_ID = '1GbsLDk5jc3OX3lWQ6wKwyNx-ax0NN3oUwZqbMwvSKCA';

// Inicialización de la API de Google Sheets
function initGoogleSheetsAPI() {
    gapi.load('client', function() {
        gapi.client.init({
            apiKey: 'AIzaSyDnDwQmOm-cB3NDjx0kgTNdlxmnJ-MZyXI', // Reemplaza 'YOUR_API_KEY' con tu clave de API de Google Sheets
        }).then(function() {
            console.log('Google Sheets API initialized');
        }).catch(function(error) {
            console.error('Error initializing Google Sheets API:', error);
        });
    });
}

$(document).ready(function() {
    // Inicializa la API de Google Sheets
    gapi.load('client', initGoogleSheetsAPI);
});

  

