FROM php:8.2-fpm

# install dependency
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    unzip \
    git \
    curl \
    && docker-php-ext-install \
    pdo \
    pdo_pgsql \
    pgsql \
    bcmath \
    pcntl \
    zip \
    exif \
    opcache

# install redis extension
RUN pecl install redis \
    && docker-php-ext-enable redis

WORKDIR /var/www