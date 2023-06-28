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
CMD ["node", "dist/src/main.js"]

#docker build --tag back-end .
#docker run -p back-end 5000:5000 back-end
