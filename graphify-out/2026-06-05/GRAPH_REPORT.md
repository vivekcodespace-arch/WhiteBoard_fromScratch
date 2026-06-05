# Graph Report - whiteboard_learning  (2026-06-05)

## Corpus Check
- 14 files · ~3,235 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 86 nodes · 67 edges · 22 communities (8 shown, 14 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `10d2fc90`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

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
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `scripts` - 5 edges
3. `Package Manifest` - 3 edges
4. `hooks` - 2 edges
5. `paths` - 2 edges
6. `Next.js Config` - 2 edges
7. `Getting Started` - 1 edges
8. `Learn More` - 1 edges
9. `Deploy on Vercel` - 1 edges
10. `Point` - 1 edges

## Surprising Connections (you probably didn't know these)
- `TypeScript Config` --shares_data_with--> `Next.js Config`  [INFERRED]
  tsconfig.json → next.config.ts
- `Package Manifest` --references--> `ESLint Config`  [INFERRED]
  package.json → eslint.config.mjs
- `Package Manifest` --references--> `Next.js Config`  [INFERRED]
  package.json → next.config.ts
- `Package Manifest` --shares_data_with--> `PostCSS Config (Tailwind)`  [INFERRED]
  package.json → postcss.config.mjs

## Hyperedges (group relationships)
- **Tailwind CSS v4 Styling Pipeline** — whiteboard_learning_postcss_config, whiteboard_learning_package, app_layout_root [INFERRED 0.85]
- **Next.js App Router Setup** — whiteboard_learning_next_config, whiteboard_learning_tsconfig, app_layout_root, app_page_home [INFERRED 0.85]
- **Mouse Drawing Event Flow** — app_page_start_drawing, app_page_draw, app_page_stop_drawing, app_page_get_point, app_page_home [EXTRACTED 1.00]
- **Graphify Query Toolset** — claude_graphify_query_cmd, claude_graphify_path_cmd, claude_graphify_explain_cmd [EXTRACTED 1.00]
- **Graphify Output Artifacts** — claude_graph_json_artifact, claude_graph_report_artifact, claude_wiki_index_artifact [EXTRACTED 1.00]
- **Search Tool Redirect to Graphify Flow** — claude_settings_search_command_matcher, claude_settings_graphify_advisory, claude_graph_json_artifact, claude_graphify_query_cmd [EXTRACTED 1.00]

## Communities (22 total, 14 thin omitted)

### Community 0 - "TypeScript Compiler Options"
Cohesion: 0.12
Nodes (17): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+9 more)

### Community 3 - "Production Dependencies"
Cohesion: 0.25
Nodes (7): dependencies, next, react, react-dom, name, private, version

### Community 4 - "Dev Dependencies & Tooling"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 5 - "Project Config Files"
Cohesion: 0.40
Nodes (5): ESLint Config, Next.js Config, Package Manifest, PostCSS Config (Tailwind), TypeScript Config

### Community 6 - "Root Layout & Fonts"
Cohesion: 0.40
Nodes (3): geistMono, geistSans, metadata

### Community 16 - "Community 16"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 21 - "Community 21"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **59 isolated node(s):** `Getting Started`, `Learn More`, `Deploy on Vercel`, `Point`, `Stroke` (+54 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `compilerOptions` connect `TypeScript Compiler Options` to `Community 17`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies & Tooling` to `Production Dependencies`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Why does `scripts` connect `Community 16` to `Production Dependencies`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Package Manifest` (e.g. with `ESLint Config` and `Next.js Config`) actually correct?**
  _`Package Manifest` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Getting Started`, `Learn More`, `Deploy on Vercel` to the rest of the system?**
  _60 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Compiler Options` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._