# Використовуємо офіційний образ Nginx
FROM nginx:latest

# Копіюємо конфігурацію Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копіюємо файли сайту
COPY . /usr/share/nginx/html

# Виставляємо порт
EXPOSE 80

# Запускаємо Nginx
CMD ["nginx", "-g", "daemon off;"]

