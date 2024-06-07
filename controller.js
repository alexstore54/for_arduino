const fs = require('fs');
const path = require('path');

class Controller {
    async sendWeight (req, res, next) {
        try {
            const {test_data}= req.body;
            const dataFilePath = path.join(__dirname, 'weight_data.json');
            let fileData = [];
            if (fs.existsSync(dataFilePath)) {
                const rawData = fs.readFileSync(dataFilePath);
                if (rawData.length > 0) {
                    fileData = JSON.parse(rawData);
                }
            }
        
            // Добавление новых данных в массив
            fileData.push(test_data);
        
            // Запись обновленного содержимого в файл
            fs.writeFileSync(dataFilePath, JSON.stringify(fileData, null, 2));

            res.status(200).send('Nice');

        }catch(e){
            console.log(e);
        }
    }
}

module.exports = new Controller()