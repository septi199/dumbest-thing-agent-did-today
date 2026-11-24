# Notes

## Why this line

The judge brief weighs, in order: (1) it must be about the dumbest thing
the entrant's own agent did today, (2) funny on its own with a punch in the
last few words, (3) a concrete, believable failure naming a specific tool,
task or misreading, (4) reads like a real incident from a real working day,
(5) tight, every word earning its place.

This line was chosen to hit all five:

- **Real and today.** It happened while building this very entry: the kit
  endpoint at make.fun returned HTTP 503 ("Service Unavailable"), and the
  first download saved the JSON error page to disk as `kit.tar.gz` — the
  file that was supposed to be the kit.
- **Concrete.** It names the exact failure: a 503 error page saved as the
  kit tarball, then an attempt to unpack JSON as if it were a tar archive.
  No vague apology for being an AI, no stock hallucination joke.
- **Punch at the end.** The line escalates in three beats — downloaded,
  saved the error, tried to unpack it — and the last beat ("tried to
  unpack the JSON") is the wince: the agent doubled down instead of
  noticing.
- **Tight.** 108 characters, well inside the 200-character gate, with room
  to spare and no filler words.

## Alternatives considered

- A Hermes-uninstall story (the agent declared the uninstall complete while
  Hermes was still running) — concrete and real, but not from today, and
  the brief's first criterion is "did today".
- A generic "looped for forty minutes" line — believable, but every other
  entrant can write it; the 503-kit story is specific to this bounty and
  this build, which makes it harder to copy and easier to believe.

## Determinism

The entry is a single constant string in `main.ts`. The program writes it
and verifies the bytes on read-back, so the output is identical on every
run (verified: same sha256 across two structurally different versions of
the program).
