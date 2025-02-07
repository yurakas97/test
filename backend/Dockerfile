# Використовуємо офіційний образ Node.js
FROM node:18

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package.json та встановлюємо залежності
COPY package*.json ./
RUN npm install

# Копіюємо код
COPY . .

# Виставляємо порт
EXPOSE 3001

# Запускаємо сервер
CMD ["node", "server.js"]

