FROM node:latest

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    openssh-client \
  # Project dependencies
    apt-utils \
    poppler-utils \ 
    catdoc \
    xpdf \
    tesseract-ocr \
    antiword \
  # Clean up
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 3000
RUN npm install -g nodemon