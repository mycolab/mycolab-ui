FROM nginx:latest

RUN apt clean
RUN apt-get update \
     && apt-get install -y build-essential git libtool-bin autopoint autotools-dev autoconf pkg-config \
        libncurses5-dev libncursesw5-dev gettext software-properties-common curl cpio npm

ADD . /mycolab-ui

WORKDIR /mycolab-ui

RUN npm install
RUN npm run build
RUN cp -r build/* /usr/share/nginx/html/