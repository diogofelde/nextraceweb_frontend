# 💻 NexTraceWeb Frontend

Interface web responsiva para ativação, rastreamento e visualização de dados sensíveis. Desenvolvido com React.js, Vite e Tailwind CSS, integrado à API do NexTraceWeb.

## 🚀 Tecnologias
- React.js
- Vite
- Tailwind CSS
- Axios para consumo da API
- Firebase Hosting ou Docker

## 📦 Estrutura
- `/src/pages` → Páginas principais
- `/src/components` → Componentes reutilizáveis
- `/src/services` → Integração com backend
- `/src/styles` → Estilos globais
- `/src/hooks` → Lógica de estado e autenticação

## 🔐 Segurança
- Interface de ativação com chave de licença
- Proteção de rotas via contexto e token JWT
- Validação de entrada e feedback visual

## 🛠️ Rodar localmente

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

Acesse em: http://localhost:5173
🔧 Variáveis de ambiente (.env)
VITE_API_URL=http://localhost:3000
VITE_LICENSE_KEY=XXXX-XXXX-XXXX-XXXX-XXXXX


⚠️ Em produção, altere VITE_API_URL para o endereço da API hospedada (ex: Render)

🚀 Deploy em produção
Firebase Hosting
npm run build
firebase deploy


Docker
docker build -t nextraceweb_frontend .
docker run -p 5173:80 nextraceweb_frontend


🔑 Licenciamento
A interface exige chave de ativação de 25 dígitos para liberar acesso completo. A validação é feita via API.
🤝 Apoie este projeto
Este sistema está sendo desenvolvido sem patrocínio, sem verba, sem equipe — apenas com dedicação e propósito.
- 💸 Pix: diogo.felde@gmail.com
- 🧑‍💼 GitHub Sponsors (em breve)
- 📢 Compartilhe com sua rede

---
