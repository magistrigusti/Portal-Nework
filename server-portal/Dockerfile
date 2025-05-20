FROM node:22.14.0

WORKDIR /app

COPY package*.json ./

RUN npm install

# Устанавливаем Prisma глобально
RUN npm install -g prisma

# Копируем схему ПЕРЕД генерацией клиента!
COPY prisma/schema.prisma ./prisma/

# Генерируем Prisma Client внутри контейнера!
RUN npx prisma generate

# Копируем всё остальное
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
