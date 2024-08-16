const fs = require('fs').promises;
const csv = require('csvtojson');

async function processCSV(inputFile) {
  try {
    const jsonData = await csv().fromFile(inputFile);
    const cleanedData = cleanData(jsonData);
    const groupedData = groupBy(cleanedData, 'field3');

    for (const [key, value] of Object.entries(groupedData)) {
      const markdownList = convertToMarkdownList(value);
      const outputFile = `../../LauncherContent/Projects/${key.replace(/ /g,"_")?.toLowerCase()}.md`;
      await fs.writeFile(outputFile, markdownList);
      console.log(`Markdown list has been saved to ${outputFile}`);
    }
  } catch (error) {
    console.error('Error processing the file:', error);
  }
}

function cleanData(jsonData) {
  return jsonData.filter(item => item?.field3 && item?.field4 && item?.field5 && item?.field7 && item?.field8);
}

function groupBy(data, key) {
  return data.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

function convertToMarkdownList(items) {
  let markdownList = `# ${items[0]?.field3}\n\n`;
  items.forEach(item => {
    markdownList += `## ${item.field4}\n\n`;
    markdownList += `- **Status:** ${item.field5}\n`;
    markdownList += `- **Size:**  ${item.field7}\n`;
    markdownList += `- **Priority:**  ${item.field8}\n\n`;
  });
  return markdownList;
}

if (process.argv.length < 3) {
  console.error('Please provide the input CSV file path as an argument.');
  process.exit(1);
}

const inputFile = process.argv[2];
processCSV(inputFile);
