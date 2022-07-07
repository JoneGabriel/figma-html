const axios = require("axios");
const fs = require("fs");

axios({
    headers: {'X-Figma-Token': 'figd_1zoJyXe35fhHAF7INNmOaSkSf6M6vFBOgfeKkZwR'},
    method: 'get',
    baseURL: 'https://api.figma.com',
    url: '/v1/files/RfeUzJENN1nryR4nU1D0Jo',
}).then(response=>{
    
    fs.writeFile('figma.json', JSON.stringify(response.data), (err)=>{

        if(err){
            console.log(err)
        }

    })
    
}).catch(erro=>{
    console.log(erro)
})