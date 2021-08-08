# Private Data

```sh
.
├── .env
├── certs/
│  ├── cert.crt
│  └── cert.key
│
└── passwd/
   └── ssl_passphrase.txt
```

---

- #### [`.env`](.env)

  ```
  API_KEY={CLOUDFLARE_API_KEY}
  DOMAIN={DOMAIN}
  ```

- ### [`certs/`](certs)

  - #### [`cert.crt`](certs/cert.crt)

    ```
    -----BEGIN CERTIFICATE-----
    .
    .
    .
    -----END CERTIFICATE-----
    ```

  - #### [`cert.key`](certs/cert.key)

    ```
    -----BEGIN PRIVATE KEY-----
    .
    .
    .
    -----END PRIVATE KEY-----
    ```

- ### [`passwd/`](passwd)

  - #### [`ssl_passphrase.txt`](passwd/ssl_passphrase.txt)

    ```
    {SSL_PASSPHRASE}
    ```
