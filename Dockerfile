FROM nginx:latest

RUN apt clean
RUN apt-get update \
     && apt-get install -y build-essential git libtool-bin autopoint autotools-dev autoconf pkg-config \
        libncurses5-dev libncursesw5-dev gettext software-properties-common curl cpio

ADD . /mycolab-ui

WORKDIR /mycolab-ui


# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 16.14.0
RUN mkdir -p $NVM_DIR 

# install nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# install node and npm
RUN . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# confirm installation
RUN node -v
RUN npm -v

RUN npm install
RUN npm run build
RUN cp -r build/* /usr/share/nginx/html/
