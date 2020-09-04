FROM mysql:5

ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_DATABASE users
ENV MYSQL_USER admin
ENV MYSQL_PASSWORD admin
EXPOSE 3306

ADD schema.sql /docker-entrypoint-init.db.d
