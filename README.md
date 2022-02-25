# FrontEnd Challenge (Fiter)

<img src="https://raw.githubusercontent.com/NycolasSM/assets/main/fiter-frontend-chalenge-preview.gif" height="400px" alt="Preview">

> Confira a live Preview do Projeto: <a href ="https://desafio-frontend-jr-fiter.vercel.app/">https://desafio-frontend-jr-fiter.vercel.app/</a>

<br>
<br>
<p>
  Desafio para a vaga de frontEnd Jr na Fiter
</p>
<br>
<br>

## 🧩 Como testar <>

<br>

<h3>Para testar o Projeto:</h3>

```
<npm i> para instalar as dependencias
<npm run dev> inicia o Projeto local na porta padrão 3000
```
<br>

<h3>Para alterar qual api sera utilizada para buscar os dados basta:</h3>

```
 - no arquivo <index.tsx>
 local: ./src/pages/MeetTheEmployees/index.tsx

 - altere a funcão no useEffect()
  --> loadCollaboratorsDataFromNycolasApi() 
  para 
  --> loadCollaboratorsDataFromFiterApi()
```

<br>
<br>

## Tecnologias Utilizadas

<ul>
  <li>ReactJs</li>
  <li>React Bootstrap</li>
  <li>Eslint</li>
  <li>Prettier</li>
  <li>TypeScript</li>
  <li>Axios</li>
  <li>vanilla-tilt</li>
  <li>vite</li>
  <li>Api própria com JSON-Server hospedado na Heroku</li>
</ul>