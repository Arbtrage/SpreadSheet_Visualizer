const path = require('path');
const fs=require('fs')
const xlsx = require('xlsx');


module.exports = {
  processedData: async(req, res) => {
    try {
      const workbook = xlsx.readFile(req.file.path);
    
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    
      const jsonData = xlsx.utils.sheet_to_json(worksheet);
      console.log(jsonData);
      const data=await prepareData(jsonData)
      res.status(200).json({ message: data });
      
    } catch (error) {
      res.status(400).json({Error:error.message})
    }
  },
};


async function prepareData(originalData){
  const preparedData = [];

    originalData.forEach((entry) => {
      const keys = Object.keys(entry);
      const values = Object.values(entry);
      const yearEntries = keys.filter((key) => key !== "FB");
      const dataEntries = [];
      let i=0;
      yearEntries.forEach((data, index) => {
          i+=1;
          dataEntries.push({
              atribute: `${data}`,
              value: parseFloat(values[index]),
            });
        });
        const metric = values[i];
      const value = dataEntries.map((d) => d.value);
      const sum = value.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      const mean = sum / value.length;

      const metricBlock = {
        metric: metric,
        data: dataEntries,
        mean: mean,
        max: Math.max(...value),
        min: Math.min(...value),
      };

      preparedData.push(metricBlock);
    });
    
    return preparedData;
}