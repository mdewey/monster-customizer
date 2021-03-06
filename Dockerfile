FROM node:14-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json yarn.lock ./

RUN yarn install --production
# RUN yarn install
# Copy app files
COPY . ./
# Build the app
RUN yarn build

# Bundle static assets with nginx
# FROM nginx:1.21.0-alpine as production
FROM nginx:1.21.0-alpine

# ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
# Start nginx
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
