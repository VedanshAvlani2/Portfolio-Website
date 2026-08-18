Screenshot naming convention
============================
One folder per project. Inside each folder:

  <Project Name> Header.png   -> card thumbnail, MUST be 16:9 (e.g. 1600x900)
  <Project Name> 1.png        -> carousel slide 1
  <Project Name> 2.png        -> carousel slide 2
  ... etc.

The card and the carousel both use a fixed 16:9 box now, so render your
Gemini images at 16:9 (1600x900 or 1920x1080) and nothing will crop or jump.
Slides are object-contain, so off-ratio images letterbox instead of cropping.

Folders awaiting images:
  DevAssist/            Header + 1-4
  Velox/                Header + 1-4
  F1 Race Strategist/   Header + 1-4
