# 9b is-not.cool
Source codenya website buat rombel 9b / Salak
## Cara tes (bagian development)
Jalanin 
```shell
$ vite
```
aja dah

## Cara deploy (bagian production)
run
```shell
$ npm run start
```
itu aja dah goblok

Dulu ada commandnya, cuman karena vite limitasinya banyak, jadi commandnya gw apus

Dan sekarang teknik servenya gini:

- Vitenya ngebuild, abis situ suru `node` jalanin `./index.js`

- `./index.js` bakal ngeserve static filenya vite pakek `express`
