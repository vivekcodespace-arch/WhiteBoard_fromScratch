# Graph Report - .  (2026-05-29)

## Corpus Check
- Corpus is ~1,473 words - fits in a single context window. You may not need a graph.

## Summary
- 96 nodes · 92 edges · 16 communities (7 shown, 9 thin omitted)
- Extraction: 86% EXTRACTED · 14% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.86)
- Token cost: 44,300 input · 7,820 output

## Community Hubs (Navigation)
- [[_COMMUNITY_TypeScript Compiler Options|TypeScript Compiler Options]]
- [[_COMMUNITY_Whiteboard Drawing UI|Whiteboard Drawing UI]]
- [[_COMMUNITY_Graphify Workflow & Artifacts|Graphify Workflow & Artifacts]]
- [[_COMMUNITY_Production Dependencies|Production Dependencies]]
- [[_COMMUNITY_Dev Dependencies & Tooling|Dev Dependencies & Tooling]]
- [[_COMMUNITY_Project Config Files|Project Config Files]]
- [[_COMMUNITY_Root Layout & Fonts|Root Layout & Fonts]]
- [[_COMMUNITY_Claude Hooks Config|Claude Hooks Config]]
- [[_COMMUNITY_ESLint Configuration|ESLint Configuration]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_PostCSS Configuration|PostCSS Configuration]]
- [[_COMMUNITY_Window Icon Asset|Window Icon Asset]]
- [[_COMMUNITY_Next.js Logo Asset|Next.js Logo Asset]]
- [[_COMMUNITY_Vercel Logo Asset|Vercel Logo Asset]]
- [[_COMMUNITY_Globe Icon Asset|Globe Icon Asset]]
- [[_COMMUNITY_File Icon Asset|File Icon Asset]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Home()` - 11 edges
3. `Graphify Workflow Rules` - 10 edges
4. `scripts` - 5 edges
5. `PreToolUse Bash Hook` - 5 edges
6. `Package Manifest` - 4 edges
7. `startDrawing handler` - 4 edges
8. `Graphify Advisory Context Injection` - 4 edges
9. `draw handler` - 3 edges
10. `graphify query Command` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Graphify Advisory Context Injection` --semantically_similar_to--> `Graphify Workflow Rules`  [INFERRED] [semantically similar]
  .claude/settings.json → CLAUDE.md
- `README - Next.js Project Intro` --references--> `Home()`  [EXTRACTED]
  README.md → app/page.tsx
- `RootLayout Component` --conceptually_related_to--> `Next.js 16 Breaking Changes Warning`  [INFERRED]
  app/layout.tsx → AGENTS.md
- `PreToolUse Bash Hook` --references--> `graphify-out/graph.json Artifact`  [EXTRACTED]
  .claude/settings.json → CLAUDE.md
- `PreToolUse Bash Hook` --rationale_for--> `Graphify Workflow Rules`  [INFERRED]
  .claude/settings.json → CLAUDE.md

## Hyperedges (group relationships)
- **Tailwind CSS v4 Styling Pipeline** — whiteboard_learning_postcss_config, whiteboard_learning_package, app_layout_root [INFERRED 0.85]
- **Next.js App Router Setup** — whiteboard_learning_next_config, whiteboard_learning_tsconfig, app_layout_root, app_page_home [INFERRED 0.85]
- **Mouse Drawing Event Flow** — app_page_start_drawing, app_page_draw, app_page_stop_drawing, app_page_get_point, app_page_home [EXTRACTED 1.00]
- **Graphify Query Toolset** — claude_graphify_query_cmd, claude_graphify_path_cmd, claude_graphify_explain_cmd [EXTRACTED 1.00]
- **Graphify Output Artifacts** — claude_graph_json_artifact, claude_graph_report_artifact, claude_wiki_index_artifact [EXTRACTED 1.00]
- **Search Tool Redirect to Graphify Flow** — claude_settings_search_command_matcher, claude_settings_graphify_advisory, claude_graph_json_artifact, claude_graphify_query_cmd [EXTRACTED 1.00]

## Communities (16 total, 9 thin omitted)

### Community 0 - "TypeScript Compiler Options"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 1 - "Whiteboard Drawing UI"
Cohesion: 0.16
Nodes (15): RootLayout Component, draw handler, getPoint helper, Home(), Point, Point Type, startDrawing handler, stopDrawing handler (+7 more)

### Community 2 - "Graphify Workflow & Artifacts"
Cohesion: 0.23
Nodes (13): graphify-out/graph.json Artifact, graphify-out/GRAPH_REPORT.md Artifact, graphify explain Command, graphify path Command, graphify query Command, graphify update Command, Graphify Workflow Rules, CLAUDE.md @AGENTS.md Include Directive (+5 more)

### Community 3 - "Production Dependencies"
Cohesion: 0.15
Nodes (12): dependencies, next, react, react-dom, name, private, scripts, build (+4 more)

### Community 4 - "Dev Dependencies & Tooling"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 5 - "Project Config Files"
Cohesion: 0.33
Nodes (6): ESLint Config, Next.js Config, Package Manifest, PostCSS Config (Tailwind), README - Next.js Project Intro, TypeScript Config

### Community 6 - "Root Layout & Fonts"
Cohesion: 0.40
Nodes (3): geistMono, geistSans, metadata

## Knowledge Gaps
- **59 isolated node(s):** `target`, `lib`, `allowJs`, `skipLibCheck`, `strict` (+54 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Home()` connect `Whiteboard Drawing UI` to `Project Config Files`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies & Tooling` to `Production Dependencies`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Graphify Workflow Rules` (e.g. with `CLAUDE.md @AGENTS.md Include Directive` and `Graphify Advisory Context Injection`) actually correct?**
  _`Graphify Workflow Rules` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `target`, `lib`, `allowJs` to the rest of the system?**
  _61 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Compiler Options` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._