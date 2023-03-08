#psql postgresql://root:mcptg14a121@127.0.0.1:3003
FROM postgres
ADD /dump.sql /docker-entrypoint-initdb.d
EXPOSE 5432