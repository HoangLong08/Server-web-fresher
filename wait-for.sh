#!/bin/sh

dockerize -wait tcp://db-postgres:5444 -timeout 10s
npm run migration:run
npm run seed
npm run start:prod