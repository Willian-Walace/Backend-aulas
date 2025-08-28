const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { error } = require('console');
//require('dontenv').confg();
const app = express();
const PORT = 3000; 
const apiKey = '46feaf2d6f46008600418771836b4450'; 

app.get('/weather',async(req,res)=>{
    const{city,country } = req.query; 
    if(!city || !country){
        return res.status(400).json({error:'Informe a cidade e o pais'})
    }
    try{

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}&units=metric&lang=pt_br`);
        const data = response.data;
        const temperature = data.main?.temp ??0;
        const humidity = data.main?.humidity ??0;
        const windSeed = data.main?.windSeed ??0;
        const rainChance = data.rain?.['ih'] ??0;
        const weatherCondition = data.weatherCondition?.[0]?.description ?? 'Desconhecido';
        
        res.json({temperature,humidity,windSeed,rainChance,weatherCondition});

    }catch(err){
        if(err.response?.status==404){
            return res.status(404).json({error:'Cidade não encontrada'});
        }
        res.status(500).json({error:'Erro ao obter dados do clima'});
    }
});

app.listen(PORT,()=>console.log(`Servidor rodando em http://localhost:${PORT}/`));
