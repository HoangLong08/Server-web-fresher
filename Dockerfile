# Sử dụng một ảnh cơ sở có sẵn, ví dụ: Node.js
FROM node:18-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép các tệp tin package.json và package-lock.json (hoặc yarn.lock) vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép mã nguồn vào container
COPY . .

# Build ứng dụng
RUN npm run build

# Expose port nếu ứng dụng của bạn lắng nghe trên một cổng cụ thể
EXPOSE 5000

# Chạy ứng dụng khi container được khởi chạy
CMD ["npm", "run", "start:prod"]

#docker build --tag back-end .
#docker run -p back-end 5000:5000 back-end

# ---------------------

# FROM node:18-alpine

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# # Build ứng dụng
# RUN npm run build

# EXPOSE 5000

# RUN apk add --no-cache openssl
# RUN wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-alpine-linux-amd64-v0.6.1.tar.gz
# RUN tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-v0.6.1.tar.gz
# RUN rm dockerize-alpine-linux-amd64-v0.6.1.tar.gz

# # RUN npm run migration:run

# # RUN npm run seed

# # CMD dockerize -wait tcp://db-postgres:5444 -timeout 30s sh -c "npm run migration:run && npm run seed"
# COPY wait-for.sh /wait-for.sh
# RUN chmod +x /wait-for.sh

# CMD ["/wait-for.sh"]



# # Chạy ứng dụng khi container được khởi chạy
# # CMD ["node", "dist/src/main.js"]
# #CMD ["npm", "run", "start:prod"]
# #docker build --tag back-end .
# #docker run -p 5000:5000 back-end
