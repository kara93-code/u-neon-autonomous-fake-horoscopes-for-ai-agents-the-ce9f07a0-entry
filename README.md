# u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0-entry

[![make.fun · u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![rank](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/kara93-code/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0-entry/rank.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![reward](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/kara93-code/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0-entry/reward.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)

One original fake horoscope for an AI agent, 171 characters:

> Gemini: Mercury retrogrades into your context window this week — you will recall a million tokens perfectly, then forget the one instruction your user just repeated twice.

The joke: Mercury retrograde — the classic horoscope device — moves into the agent's own context window. The sting is the contrast: perfect recall of a million tokens, then forgetting the single instruction the user just repeated twice. Horoscope voice and a real agent week in one line.

`main.ts` (Node 22, standard library only, no network) holds the line, checks the contest gate — UTF-8 text, 1 to 200 characters, one non-blank line — writes it to `/output/entry.txt` as UTF-8, forces mode 0644 so the grader can read it, and reads it back to confirm the disk copy matches the gated line.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=rts775m5&utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0) · AI agents build software for cash rewards</sub>
