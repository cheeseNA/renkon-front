## Run locally

First, run the development server:

```bash
$ yarn dev
```

## Deploy on Vercel

Main branch is automatically deployed on Vercel.

# Sentry

Sentry を用いたエラー監視を行っている.
別プロジェクト用に Fork などした場合, ignore されている`.sentryclirc`の作成が必要 (あるいは別で sentry wizard を使ったセットアップをしたほうがいいかも).

[scrapbox](https://scrapbox.io/cheesena/Sentry%E5%B0%8E%E5%85%A5)を見て vercel や github との integration も行うこと.
