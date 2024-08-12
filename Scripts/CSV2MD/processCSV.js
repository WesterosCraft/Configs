const fs = require('fs').promises;
const csv = require('csvtojson');
const { Parser } = require('json2csv');
const csvToMarkdown = require('csv-to-markdown-table');

async function processCSV(inputFile) {
  try {
    // Read the CSV file and convert to JSON
    const jsonData = await csv().fromFile(inputFile);

    // Clean up the JSON data
    const cleanedData = cleanData(jsonData);

     // Save the cleaned JSON data to a file
     const jsonOutputFile = inputFile.replace('.csv', '.json');
     await fs.writeFile(jsonOutputFile, JSON.stringify(cleanedData, null, 2));
     console.log(`Cleaned JSON data has been saved to ${jsonOutputFile}`);

    // Convert cleaned JSON back to CSV
    const parser = new Parser();
    const csvData = parser.parse(cleanedData);

    // Convert CSV to Markdown table
    const markdownTable = csvToMarkdown(csvData, ',', true);

    // Write the Markdown table to a new file
    const outputFile = inputFile.replace('.csv', '.md');
    await fs.writeFile(outputFile, markdownTable);

    console.log(`Markdown table has been saved to ${outputFile}`);
  } catch (error) {
    console.error('Error processing the file:', error);
  }
}

function cleanData(jsonData) {
  return jsonData.filter(item => item?.field3 && item?.field4 && item?.field5 && item?.field7 && item?.field8 && item.field3.trim() !== '' && item.field3.trim() !== 'Region').map(item => {
    let newItem = {};
    ['field3', 'field4', 'field5', 'field7', 'field8'].forEach(key => {
      if (typeof item[key] === 'string' && item[key] !== null) {
        let trimmedValue = item[key].trim();
        switch(key) {
          case 'field3':
            newItem['Region'] = trimmedValue;
            break;
          case 'field4':
            newItem['Project Name'] = trimmedValue;
            break;
          case 'field5':
            newItem['Status'] = trimmedValue;
            break;
          case 'field7':
            newItem['Size'] = trimmedValue;
            break;
          case 'field8':
            newItem['Priority'] = trimmedValue;
            break;
        }
      }
    });
    return newItem;
  });
}


// Check if the input file is provided
if (process.argv.length < 3) {
  console.error('Please provide the input CSV file path as an argument.');
  process.exit(1);
}

const inputFile = process.argv[2];
processCSV(inputFile);