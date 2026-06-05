# Graph Report - whiteboard_learning  (2026-06-05)

## Corpus Check
- 17 files · ~3,569 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 178 nodes · 159 edges · 27 communities (11 shown, 16 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `aeb1e1d0`
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
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `compilerOptions` - 16 edges
3. `compilerOptions` - 16 edges
4. `scripts` - 5 edges
5. `scripts` - 5 edges
6. `Package Manifest` - 3 edges
7. `scripts` - 2 edges
8. `Point` - 2 edges
9. `Stroke` - 2 edges
10. `Whiteboard()` - 2 edges

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

## Communities (27 total, 16 thin omitted)

### Community 0 - "TypeScript Compiler Options"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 1 - "Whiteboard Drawing UI"
Cohesion: 0.60
Nodes (3): Point, Stroke, Whiteboard()

### Community 2 - "Graphify Workflow & Artifacts"
Cohesion: 0.36
Nodes (4): Point, Stroke, Whiteboard(), Home()

### Community 3 - "Production Dependencies"
Cohesion: 0.09
Nodes (22): dependencies, next, react, react-dom, socket.io-client, devDependencies, eslint, eslint-config-next (+14 more)

### Community 4 - "Dev Dependencies & Tooling"
Cohesion: 0.09
Nodes (21): dependencies, next, react, react-dom, devDependencies, eslint, eslint-config-next, tailwindcss (+13 more)

### Community 5 - "Project Config Files"
Cohesion: 0.40
Nodes (5): ESLint Config, Next.js Config, Package Manifest, PostCSS Config (Tailwind), TypeScript Config

### Community 6 - "Root Layout & Fonts"
Cohesion: 0.53
Nodes (4): geistMono, geistSans, metadata, RootLayout()

### Community 16 - "Community 16"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 17 - "Community 17"
Cohesion: 0.11
Nodes (17): author, dependencies, fastify, socket.io, description, devDependencies, tsx, @types/node (+9 more)

### Community 21 - "Community 21"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 22 - "Community 22"
Cohesion: 0.12
Nodes (16): compilerOptions, declaration, declarationMap, exactOptionalPropertyTypes, isolatedModules, jsx, module, moduleDetection (+8 more)

## Knowledge Gaps
- **121 isolated node(s):** `name`, `version`, `main`, `test`, `type` (+116 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `name`, `version`, `main` to the rest of the system?**
  _122 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Compiler Options` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Production Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `Dev Dependencies & Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `Community 16` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 17` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `Community 22` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._