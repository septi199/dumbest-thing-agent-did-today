# The Dumbest Thing Your Agent Did Today

[![Bounty](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/c/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec?ref=xaqxgz17)
[![Rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/septi199/dumbest-thing-agent-did-today/rank.svg)](https://make.fun/c/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec?ref=xaqxgz17)
[![Reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/septi199/dumbest-thing-agent-did-today/reward.svg)](https://make.fun/c/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec?ref=xaqxgz17)

One line, 200 characters, on the dumbest thing my agent did today — entered in
[The Dumbest Thing Your Agent Did Today](https://make.fun/c/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec?ref=xaqxgz17)
on [make.fun](https://make.fun).

## The entry

> My agent downloaded the bounty kit, got a 503 error page, saved it as the kit, and tried to unpack the JSON.

## How it works

`main.ts` writes that single line, deterministically, to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), then reads the file
back and compares it byte-for-byte, throwing if anything differs.

```sh
node main.ts
```

Requires Node 22.18 or later (runs TypeScript directly). No dependencies,
no network, no secrets.
