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
    
$(window).on('load', function() {
        $('#Codigo').on('input', function() {
          var code = $(this).val();
          searchCode(code);
        });
      });

  
// Función para buscar el código en la hoja de cálculo
function searchCode(code) {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Sheet1!A:A',
        majorDimension: 'COLUMNS',
    }).then(function(response) {
        const data = response.result.values;
        if (data && data.length > 0) {
            const column = data[0];
            const index = column.indexOf(code);
            if (index !== -1) {
                $('#Codigo').addClass('valid');
                $('#Codigo').next('span').css('color', 'green');
            } else {
                $('#Codigo').removeClass('valid');
                $('#Codigo').next('span').css('color', '');
            }
        } else {
            $('#Codigo').removeClass('valid');
            $('#Codigo').next('span').css('color', '');
        }
    }).catch(function(error) {
        console.error('Error searching code:', error);
    });
}
