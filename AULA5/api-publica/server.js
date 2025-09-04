require('dotenv').config(); 
const express = require('express'); 
const cors = require("cors");
const axios = require('axios'); 
const app = express(); 
const PORT = 3000; 
const apiKey = process.env.OPENWEATHER_API_KEY;

app.use(cors());

app.get('/weather',async(req,res)=>{
    const{city,country } = req.query; 
        if(!city || !country){
        return res.status(400).json({error:'Informe a cidade e o pais'});
    }
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}&units=metric&lang=pt_br`);
        const data = response.data;
        const temperature = data.main?.temp ??0;
        const humidity = data.main?.humidity ??0;
        const windSpeed = data.wind?.speed? data.wind.speed *3.6 :0;
        const rainChance = data.rain?.['24h'] ?? 0;
        const weatherCondition = data.weather?.[0]?.description ?? 'Desconhecido';

        res.json({temperature,humidity,windSpeed,rainChance,weatherCondition});
   
    }catch(err){
        if(err.response?.status==404){
            return res.status(404).json({error:'Cidade não encontrada'});
        }
        res.status(500).json({error:'Erro ao obter dados do clima'});
    }
});

app.get('/multiple',async(req,res) => {
    const {cities}= req.query;
    if(!cities){
     return res.status(400).json({error:'Informe pelo menos uma cidade'})
    }
    const cityList = cities.split(',');
    const results =[]; 
    try {
        for (let city of cityList){
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`);
        
        results.push({city,temperature: response.data.main?.temp ??0,
            weather: response.data.weather?.[0]?.description??'Desconhecido'});
    }
res.json(results);
}  catch(err){
        res.status(500).json({error:'Erro ao consultar api para multiplas cidades'});
    }
});

app.get('/alert', async (req, res) => {
    const { city, country } = req.query;

    if (!city || !country) {
        return res.status(400).json({ error: 'Informe cidade e país.'});
    }

    try {
        const response = await axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric&lang=pt_br`
        );

        const temp = response.data.main?.temp ?? 0;
        let alert = temp > 30 ? 'No clima quente, a minha gente sua frio' : temp < 10 ? `Pegue seu bombojaco e sua toca,Porque faz 10°C em ${city}`:'Um clima agradável para recarregar as energias';
        res.json({ city, temperature: temp, alert});

    }   catch (err) {
        res.status(500).json({ error: 'Erro ao obter dados do clima.'})
    } 
});

app.post('/cadastro', (req, res) => {
    const { nome, idade } = req.body;
    if (!nome || idade === undefined || idade === null || idade === 0 || nome.trim() === "") {
        res.status(400).json({ error: 'Nome e idade são obrigatórios.' });
    }
    const novo = { nome, idade };
    dados.push(novo);
    res.status(201).json({ mensagem: 'Dado adicionado com sucesso!', data: novo });
});   


app.get('/dados', (req, res) => {
    res.json(dados);
});




app.listen(PORT,()=>console.log(`Servidor rodando em http://localhost:${PORT}/`));