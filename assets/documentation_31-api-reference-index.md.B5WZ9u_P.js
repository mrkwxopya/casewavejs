import{_ as s,o as e,c as n,ag as p}from"./chunks/framework.BXHXBLr6.js";const u=JSON.parse('{"title":"31. API Reference Index","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/31-api-reference-index.md","filePath":"documentation/31-api-reference-index.md"}'),t={name:"documentation/31-api-reference-index.md"};function i(l,a,o,r,c,d){return e(),n("div",null,[...a[0]||(a[0]=[p(`<h1 id="_31-api-reference-index" tabindex="-1">31. API Reference Index <a class="header-anchor" href="#_31-api-reference-index" aria-label="Permalink to &quot;31. API Reference Index&quot;">​</a></h1><p>Master index for complete API documentation.</p><p>This begins full A-Z reference layer.</p><p>Every exported type, function, class, interface, attribute, option, hook, event, token should be discoverable from here.</p><p>This becomes documentation backbone.</p><hr><h1 id="purpose" tabindex="-1">Purpose <a class="header-anchor" href="#purpose" aria-label="Permalink to &quot;Purpose&quot;">​</a></h1><p>This document acts as:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>api map</span></span>
<span class="line"><span>reference entrypoint</span></span>
<span class="line"><span>symbol index</span></span>
<span class="line"><span>navigation hub</span></span>
<span class="line"><span>cross-link registry</span></span></code></pre></div><p>Users should never wonder:</p><p>&quot;where is this documented?&quot;</p><hr><h1 id="reference-structure" tabindex="-1">Reference Structure <a class="header-anchor" href="#reference-structure" aria-label="Permalink to &quot;Reference Structure&quot;">​</a></h1><p>API docs split into:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Core</span></span>
<span class="line"><span>Graph</span></span>
<span class="line"><span>Nodes</span></span>
<span class="line"><span>Edges</span></span>
<span class="line"><span>Layouts</span></span>
<span class="line"><span>Plugins</span></span>
<span class="line"><span>Themes</span></span>
<span class="line"><span>Events</span></span>
<span class="line"><span>Utilities</span></span>
<span class="line"><span>Types</span></span>
<span class="line"><span>Hooks</span></span>
<span class="line"><span>Errors</span></span>
<span class="line"><span>Internals</span></span></code></pre></div><p>Everything indexed.</p><hr><h1 id="reference-conventions" tabindex="-1">Reference Conventions <a class="header-anchor" href="#reference-conventions" aria-label="Permalink to &quot;Reference Conventions&quot;">​</a></h1><p>Each API entry includes:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>signature</span></span>
<span class="line"><span>purpose</span></span>
<span class="line"><span>parameters</span></span>
<span class="line"><span>returns</span></span>
<span class="line"><span>examples</span></span>
<span class="line"><span>notes</span></span>
<span class="line"><span>related APIs</span></span></code></pre></div><p>Required.</p><hr><h1 id="symbol-entry-template" tabindex="-1">Symbol Entry Template <a class="header-anchor" href="#symbol-entry-template" aria-label="Permalink to &quot;Symbol Entry Template&quot;">​</a></h1><p>Every symbol uses template:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## SymbolName</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Purpose</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Signature</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Parameters</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Returns</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Examples</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Notes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Related</span></span></code></pre></div><p>No exceptions.</p><hr><h1 id="core-api-index" tabindex="-1">Core API Index <a class="header-anchor" href="#core-api-index" aria-label="Permalink to &quot;Core API Index&quot;">​</a></h1><hr><h2 id="graph-construction" tabindex="-1">Graph Construction <a class="header-anchor" href="#graph-construction" aria-label="Permalink to &quot;Graph Construction&quot;">​</a></h2><p>Document:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>createGraph</span></span>
<span class="line"><span>createGraphStore</span></span>
<span class="line"><span>createGraphEngine</span></span>
<span class="line"><span>createGraphSerializer</span></span></code></pre></div><p>Files:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>api/core/createGraph.md</span></span>
<span class="line"><span>api/core/createGraphStore.md</span></span>
<span class="line"><span>api/core/createGraphEngine.md</span></span></code></pre></div><hr><h2 id="graph-lifecycle" tabindex="-1">Graph Lifecycle <a class="header-anchor" href="#graph-lifecycle" aria-label="Permalink to &quot;Graph Lifecycle&quot;">​</a></h2><p>Document:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mount</span></span>
<span class="line"><span>destroy</span></span>
<span class="line"><span>hydrate</span></span>
<span class="line"><span>serialize</span></span>
<span class="line"><span>clone</span></span>
<span class="line"><span>reset</span></span></code></pre></div><hr><h2 id="state-apis" tabindex="-1">State APIs <a class="header-anchor" href="#state-apis" aria-label="Permalink to &quot;State APIs&quot;">​</a></h2><p>Document:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>getState</span></span>
<span class="line"><span>setState</span></span>
<span class="line"><span>subscribe</span></span>
<span class="line"><span>snapshot</span></span>
<span class="line"><span>transaction</span></span></code></pre></div><hr><h1 id="node-api-index" tabindex="-1">Node API Index <a class="header-anchor" href="#node-api-index" aria-label="Permalink to &quot;Node API Index&quot;">​</a></h1><p>Document all:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>addNode</span></span>
<span class="line"><span>removeNode</span></span>
<span class="line"><span>updateNode</span></span>
<span class="line"><span>moveNode</span></span>
<span class="line"><span>groupNode</span></span>
<span class="line"><span>collapseNode</span></span>
<span class="line"><span>expandNode</span></span>
<span class="line"><span>cloneNode</span></span></code></pre></div><p>Each gets own file.</p><hr><h2 id="node-attributes-reference" tabindex="-1">Node Attributes Reference <a class="header-anchor" href="#node-attributes-reference" aria-label="Permalink to &quot;Node Attributes Reference&quot;">​</a></h2><p>Dedicated reference:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>id</span></span>
<span class="line"><span>type</span></span>
<span class="line"><span>position</span></span>
<span class="line"><span>data</span></span>
<span class="line"><span>metadata</span></span>
<span class="line"><span>style</span></span>
<span class="line"><span>ports</span></span>
<span class="line"><span>visibility</span></span>
<span class="line"><span>locked</span></span></code></pre></div><p>Every attribute explained.</p><hr><h2 id="node-data-schema" tabindex="-1">Node Data Schema <a class="header-anchor" href="#node-data-schema" aria-label="Permalink to &quot;Node Data Schema&quot;">​</a></h2><p>Document:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NodeConfig</span></span>
<span class="line"><span>NodeData</span></span>
<span class="line"><span>NodeStyle</span></span>
<span class="line"><span>NodePort</span></span></code></pre></div><p>Include full schema tables.</p><hr><h1 id="edge-api-index" tabindex="-1">Edge API Index <a class="header-anchor" href="#edge-api-index" aria-label="Permalink to &quot;Edge API Index&quot;">​</a></h1><p>Document:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>addEdge</span></span>
<span class="line"><span>removeEdge</span></span>
<span class="line"><span>updateEdge</span></span>
<span class="line"><span>rerouteEdge</span></span>
<span class="line"><span>reverseEdge</span></span>
<span class="line"><span>groupEdge</span></span></code></pre></div><p>All indexed.</p><hr><h2 id="edge-attributes" tabindex="-1">Edge Attributes <a class="header-anchor" href="#edge-attributes" aria-label="Permalink to &quot;Edge Attributes&quot;">​</a></h2><p>Document:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>source</span></span>
<span class="line"><span>target</span></span>
<span class="line"><span>direction</span></span>
<span class="line"><span>relation</span></span>
<span class="line"><span>routing</span></span>
<span class="line"><span>label</span></span>
<span class="line"><span>style</span></span>
<span class="line"><span>weight</span></span></code></pre></div><p>Explain purpose.</p><hr><h1 id="layout-apis" tabindex="-1">Layout APIs <a class="header-anchor" href="#layout-apis" aria-label="Permalink to &quot;Layout APIs&quot;">​</a></h1><p>Document:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>applyLayout</span></span>
<span class="line"><span>registerLayout</span></span>
<span class="line"><span>runLayoutWorker</span></span>
<span class="line"><span>cancelLayout</span></span></code></pre></div><p>Each with examples.</p><hr><h2 id="built-in-layout-catalog" tabindex="-1">Built-in Layout Catalog <a class="header-anchor" href="#built-in-layout-catalog" aria-label="Permalink to &quot;Built-in Layout Catalog&quot;">​</a></h2><p>Dedicated references:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dagre</span></span>
<span class="line"><span>force</span></span>
<span class="line"><span>grid</span></span>
<span class="line"><span>radial</span></span>
<span class="line"><span>cluster</span></span>
<span class="line"><span>hierarchy</span></span></code></pre></div><p>One page each.</p><hr><h1 id="plugin-api-index" tabindex="-1">Plugin API Index <a class="header-anchor" href="#plugin-api-index" aria-label="Permalink to &quot;Plugin API Index&quot;">​</a></h1><p>Document:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>registerPlugin</span></span>
<span class="line"><span>removePlugin</span></span>
<span class="line"><span>pluginHooks</span></span>
<span class="line"><span>pluginContext</span></span>
<span class="line"><span>pluginLifecycle</span></span></code></pre></div><p>Complete coverage.</p><hr><h2 id="plugin-hooks" tabindex="-1">Plugin Hooks <a class="header-anchor" href="#plugin-hooks" aria-label="Permalink to &quot;Plugin Hooks&quot;">​</a></h2><p>Separate index:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>beforeMount</span></span>
<span class="line"><span>afterMount</span></span>
<span class="line"><span>beforeRender</span></span>
<span class="line"><span>afterRender</span></span>
<span class="line"><span>beforeUpdate</span></span>
<span class="line"><span>afterUpdate</span></span></code></pre></div><p>All documented.</p><hr><h1 id="theme-api-index" tabindex="-1">Theme API Index <a class="header-anchor" href="#theme-api-index" aria-label="Permalink to &quot;Theme API Index&quot;">​</a></h1><p>Document:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>createTheme</span></span>
<span class="line"><span>extendTheme</span></span>
<span class="line"><span>validateTheme</span></span>
<span class="line"><span>registerTheme</span></span>
<span class="line"><span>generateTheme</span></span></code></pre></div><hr><h2 id="theme-token-reference" tabindex="-1">Theme Token Reference <a class="header-anchor" href="#theme-token-reference" aria-label="Permalink to &quot;Theme Token Reference&quot;">​</a></h2><p>Massive token catalog:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>colors</span></span>
<span class="line"><span>spacing</span></span>
<span class="line"><span>typography</span></span>
<span class="line"><span>surfaces</span></span>
<span class="line"><span>borders</span></span>
<span class="line"><span>motion</span></span>
<span class="line"><span>shadows</span></span>
<span class="line"><span>states</span></span></code></pre></div><p>Every token explained.</p><hr><h2 id="theme-catalog-index" tabindex="-1">Theme Catalog Index <a class="header-anchor" href="#theme-catalog-index" aria-label="Permalink to &quot;Theme Catalog Index&quot;">​</a></h2><p>Link all 270 themes.</p><p>Structure:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>themes/accessibility.md</span></span>
<span class="line"><span>themes/analyst.md</span></span>
<span class="line"><span>themes/windows-95.md</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>One page per theme.</p><p>Huge documentation asset.</p><hr><h1 id="event-api-index" tabindex="-1">Event API Index <a class="header-anchor" href="#event-api-index" aria-label="Permalink to &quot;Event API Index&quot;">​</a></h1><p>Document:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>on</span></span>
<span class="line"><span>off</span></span>
<span class="line"><span>emit</span></span>
<span class="line"><span>subscribeEvent</span></span>
<span class="line"><span>eventBus</span></span></code></pre></div><p>All covered.</p><hr><h2 id="event-catalog" tabindex="-1">Event Catalog <a class="header-anchor" href="#event-catalog" aria-label="Permalink to &quot;Event Catalog&quot;">​</a></h2><p>Document emitted events:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>node:add</span></span>
<span class="line"><span>node:update</span></span>
<span class="line"><span>edge:add</span></span>
<span class="line"><span>selection:change</span></span>
<span class="line"><span>layout:start</span></span>
<span class="line"><span>layout:end</span></span></code></pre></div><p>And more.</p><hr><h1 id="hook-reference" tabindex="-1">Hook Reference <a class="header-anchor" href="#hook-reference" aria-label="Permalink to &quot;Hook Reference&quot;">​</a></h1><p>Document:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>useGraph</span></span>
<span class="line"><span>useNode</span></span>
<span class="line"><span>useSelection</span></span>
<span class="line"><span>useViewport</span></span>
<span class="line"><span>useTheme</span></span></code></pre></div><p>Hook-by-hook reference.</p><hr><h1 id="utility-api-index" tabindex="-1">Utility API Index <a class="header-anchor" href="#utility-api-index" aria-label="Permalink to &quot;Utility API Index&quot;">​</a></h1><p>Document:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>validateGraph</span></span>
<span class="line"><span>deepClone</span></span>
<span class="line"><span>diffGraph</span></span>
<span class="line"><span>serializeGraph</span></span>
<span class="line"><span>deserializeGraph</span></span></code></pre></div><p>Complete utilities section.</p><hr><h1 id="type-reference-index" tabindex="-1">Type Reference Index <a class="header-anchor" href="#type-reference-index" aria-label="Permalink to &quot;Type Reference Index&quot;">​</a></h1><p>Huge generated index.</p><p>Document all exported types:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GraphConfig</span></span>
<span class="line"><span>NodeConfig</span></span>
<span class="line"><span>EdgeConfig</span></span>
<span class="line"><span>PluginContext</span></span>
<span class="line"><span>ThemeTokens</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>Everything.</p><hr><h1 id="interface-reference" tabindex="-1">Interface Reference <a class="header-anchor" href="#interface-reference" aria-label="Permalink to &quot;Interface Reference&quot;">​</a></h1><p>Every interface gets page.</p><p>Include:</p><p>purpose</p><p>fields</p><p>examples</p><p>relationships</p><p>important.</p><hr><h1 id="error-reference" tabindex="-1">Error Reference <a class="header-anchor" href="#error-reference" aria-label="Permalink to &quot;Error Reference&quot;">​</a></h1><p>Document all errors.</p><p>Examples:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DuplicateNodeError</span></span>
<span class="line"><span>InvalidEdgeError</span></span>
<span class="line"><span>PluginLoadError</span></span>
<span class="line"><span>ThemeValidationError</span></span></code></pre></div><p>Users need this.</p><hr><h1 id="error-troubleshooting-links" tabindex="-1">Error Troubleshooting Links <a class="header-anchor" href="#error-troubleshooting-links" aria-label="Permalink to &quot;Error Troubleshooting Links&quot;">​</a></h1><p>Each error links back:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>API ref -&gt; troubleshooting</span></span></code></pre></div><p>Cross linked.</p><hr><h1 id="constants-reference" tabindex="-1">Constants Reference <a class="header-anchor" href="#constants-reference" aria-label="Permalink to &quot;Constants Reference&quot;">​</a></h1><p>Document constants:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>defaults</span></span>
<span class="line"><span>limits</span></span>
<span class="line"><span>enums</span></span>
<span class="line"><span>flags</span></span></code></pre></div><p>Often forgotten.</p><p>Not here.</p><hr><h1 id="configuration-reference" tabindex="-1">Configuration Reference <a class="header-anchor" href="#configuration-reference" aria-label="Permalink to &quot;Configuration Reference&quot;">​</a></h1><p>Master config catalog:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>graph config</span></span>
<span class="line"><span>layout config</span></span>
<span class="line"><span>plugin config</span></span>
<span class="line"><span>theme config</span></span></code></pre></div><p>All options documented.</p><hr><h1 id="option-tables-standard" tabindex="-1">Option Tables Standard <a class="header-anchor" href="#option-tables-standard" aria-label="Permalink to &quot;Option Tables Standard&quot;">​</a></h1><p>Use tables:</p><table tabindex="0"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead></table><p>For every config.</p><p>Mandatory.</p><hr><h1 id="search-index" tabindex="-1">Search Index <a class="header-anchor" href="#search-index" aria-label="Permalink to &quot;Search Index&quot;">​</a></h1><p>Generate symbol search file:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>api-index.json</span></span></code></pre></div><p>Supports docs search.</p><p>Important.</p><hr><h1 id="cross-link-rules" tabindex="-1">Cross-Link Rules <a class="header-anchor" href="#cross-link-rules" aria-label="Permalink to &quot;Cross-Link Rules&quot;">​</a></h1><p>Every symbol should link:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>parent api</span></span>
<span class="line"><span>related api</span></span>
<span class="line"><span>examples</span></span>
<span class="line"><span>guides</span></span></code></pre></div><p>Connected docs.</p><hr><h1 id="navigation-structure" tabindex="-1">Navigation Structure <a class="header-anchor" href="#navigation-structure" aria-label="Permalink to &quot;Navigation Structure&quot;">​</a></h1><p>Sidebar model:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Getting Started</span></span>
<span class="line"><span>Guides</span></span>
<span class="line"><span>API Reference</span></span>
<span class="line"><span>Themes</span></span>
<span class="line"><span>Plugins</span></span>
<span class="line"><span>Examples</span></span></code></pre></div><p>This index powers API branch.</p><hr><h1 id="example-coverage-rules" tabindex="-1">Example Coverage Rules <a class="header-anchor" href="#example-coverage-rules" aria-label="Permalink to &quot;Example Coverage Rules&quot;">​</a></h1><p>Every major symbol requires:</p><p>minimum 1 basic example</p><p>1 advanced example.</p><p>Required.</p><hr><h1 id="generated-api-docs" tabindex="-1">Generated API Docs <a class="header-anchor" href="#generated-api-docs" aria-label="Permalink to &quot;Generated API Docs&quot;">​</a></h1><p>Use generated docs for:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>types</span></span>
<span class="line"><span>interfaces</span></span>
<span class="line"><span>symbols</span></span>
<span class="line"><span>signatures</span></span></code></pre></div><p>Manual augmentation for explanations.</p><p>Best hybrid model.</p><hr><h1 id="reference-categories-a-z" tabindex="-1">Reference Categories A-Z <a class="header-anchor" href="#reference-categories-a-z" aria-label="Permalink to &quot;Reference Categories A-Z&quot;">​</a></h1><p>Alphabetical index:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>A</span></span>
<span class="line"><span>addEdge</span></span>
<span class="line"><span>addNode</span></span>
<span class="line"><span>applyLayout</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>B</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>C</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>Full symbol lexicon.</p><hr><h1 id="symbol-metadata" tabindex="-1">Symbol Metadata <a class="header-anchor" href="#symbol-metadata" aria-label="Permalink to &quot;Symbol Metadata&quot;">​</a></h1><p>Track per symbol:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>introduced version</span></span>
<span class="line"><span>deprecated?</span></span>
<span class="line"><span>experimental?</span></span>
<span class="line"><span>stable?</span></span></code></pre></div><p>Extremely useful.</p><hr><h1 id="stability-labels" tabindex="-1">Stability Labels <a class="header-anchor" href="#stability-labels" aria-label="Permalink to &quot;Stability Labels&quot;">​</a></h1><p>Possible labels:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>stable</span></span>
<span class="line"><span>experimental</span></span>
<span class="line"><span>deprecated</span></span>
<span class="line"><span>internal</span></span></code></pre></div><p>Shown per symbol.</p><hr><h1 id="api-examples-index" tabindex="-1">API Examples Index <a class="header-anchor" href="#api-examples-index" aria-label="Permalink to &quot;API Examples Index&quot;">​</a></h1><p>Separate examples registry:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>examples/basic</span></span>
<span class="line"><span>examples/advanced</span></span>
<span class="line"><span>examples/recipes</span></span></code></pre></div><p>Referenced from symbols.</p><hr><h1 id="attribute-documentation-requirement" tabindex="-1">Attribute Documentation Requirement <a class="header-anchor" href="#attribute-documentation-requirement" aria-label="Permalink to &quot;Attribute Documentation Requirement&quot;">​</a></h1><p>Every attribute documents:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>type</span></span>
<span class="line"><span>purpose</span></span>
<span class="line"><span>constraints</span></span>
<span class="line"><span>defaults</span></span>
<span class="line"><span>gotchas</span></span></code></pre></div><p>Deep detail.</p><hr><h1 id="internals-index" tabindex="-1">Internals Index <a class="header-anchor" href="#internals-index" aria-label="Permalink to &quot;Internals Index&quot;">​</a></h1><p>Optional internal docs:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>scheduler</span></span>
<span class="line"><span>renderer</span></span>
<span class="line"><span>graph store</span></span>
<span class="line"><span>diff engine</span></span></code></pre></div><p>Advanced users.</p><hr><h1 id="api-reference-coverage-goal" tabindex="-1">API Reference Coverage Goal <a class="header-anchor" href="#api-reference-coverage-goal" aria-label="Permalink to &quot;API Reference Coverage Goal&quot;">​</a></h1><p>Coverage target:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>100 percent exported symbols</span></span></code></pre></div><p>No undocumented exports.</p><hr><h1 id="example-file-map" tabindex="-1">Example File Map <a class="header-anchor" href="#example-file-map" aria-label="Permalink to &quot;Example File Map&quot;">​</a></h1><p>Planned:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>api/</span></span>
<span class="line"><span> core/</span></span>
<span class="line"><span> graph/</span></span>
<span class="line"><span> nodes/</span></span>
<span class="line"><span> edges/</span></span>
<span class="line"><span> plugins/</span></span>
<span class="line"><span> themes/</span></span>
<span class="line"><span> types/</span></span>
<span class="line"><span> errors/</span></span></code></pre></div><p>Reference filesystem.</p><hr><h1 id="api-authoring-checklist" tabindex="-1">API Authoring Checklist <a class="header-anchor" href="#api-authoring-checklist" aria-label="Permalink to &quot;API Authoring Checklist&quot;">​</a></h1><p>Before symbol page complete:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>signature present</span></span>
<span class="line"><span>examples included</span></span>
<span class="line"><span>types linked</span></span>
<span class="line"><span>related links present</span></span></code></pre></div><p>Checklist pass.</p><hr><h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><h2 id="are-private-internals-documented" tabindex="-1">Are private internals documented? <a class="header-anchor" href="#are-private-internals-documented" aria-label="Permalink to &quot;Are private internals documented?&quot;">​</a></h2><p>Only relevant internals.</p><hr><h2 id="generated-or-handwritten" tabindex="-1">Generated or handwritten? <a class="header-anchor" href="#generated-or-handwritten" aria-label="Permalink to &quot;Generated or handwritten?&quot;">​</a></h2><p>Hybrid.</p><hr><h2 id="are-attributes-documented-individually" tabindex="-1">Are attributes documented individually? <a class="header-anchor" href="#are-attributes-documented-individually" aria-label="Permalink to &quot;Are attributes documented individually?&quot;">​</a></h2><p>Yes.</p><p>Every one.</p><hr><h1 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h1><p>This establishes:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>master api index</span></span>
<span class="line"><span>symbol registry</span></span>
<span class="line"><span>cross-link structure</span></span>
<span class="line"><span>full a-z reference system</span></span></code></pre></div><p>Documentation foundation milestone.</p><hr><h1 id="next-document" tabindex="-1">Next Document <a class="header-anchor" href="#next-document" aria-label="Permalink to &quot;Next Document&quot;">​</a></h1><p>Next:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>32-core-api-reference-creategraph.md</span></span></code></pre></div><p>Starts actual symbol-by-symbol deep API pages. Beginning with createGraph.</p>`,260)])])}const g=s(t,[["render",i]]);export{u as __pageData,g as default};
