# hackathon-back-app

## 無限環境構築編

- [golang](https://go.dev/)
- [docker](https://www.docker.com/)
- [mysql]

## golang & mysql

    // golang の立ち上げ
    // golang はホットリロードではないため変更するごとにcontainerにいってリロードボタンを押す必要がある
    $ docker-compose build(初期は必要なはず)
    $ docker-compose up -d

## mysql へのアクセス

    $ docker-compose exec mysql /bin/bash
    $ mysql -uroot -ppass
