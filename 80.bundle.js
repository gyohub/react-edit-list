"use strict";(self.webpackChunkreact_edit_list=self.webpackChunkreact_edit_list||[]).push([[80],{80:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const p='<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactEditList<span class="token punctuation">,</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">REL</span> <span class="token keyword">from</span> <span class="token string">"react-edit-list"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token string">"bootstrap/dist/css/bootstrap.min.css"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">"../example.css"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> product<span class="token operator">:</span> <span class="token string">"Desk"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> stock<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> product<span class="token operator">:</span> <span class="token string">"Printer"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> stock<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> product<span class="token operator">:</span> <span class="token string">"Paper"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> stock<span class="token operator">:</span> <span class="token number">2000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> product<span class="token operator">:</span> <span class="token string">"Chair"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> stock<span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> product<span class="token operator">:</span> <span class="token string">"Computer"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> stock<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> product<span class="token operator">:</span> <span class="token string">"Rent"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span> stock<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> schema<span class="token operator">:</span> <span class="token constant">REL</span><span class="token punctuation">.</span>Schema <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">"id"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"product"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">"string"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">"type"</span><span class="token punctuation">,</span>\n    type<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">""</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">"capex"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">"consumable"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"price"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">"number"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"stock"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">"number"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Loading can be asynchronous</span>\n<span class="token keyword">const</span> <span class="token function-variable function">getData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Advanced</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>ReactEditList\n      schema<span class="token operator">=</span><span class="token punctuation">{</span>schema<span class="token punctuation">}</span>\n      onLoad<span class="token operator">=</span><span class="token punctuation">{</span>getData<span class="token punctuation">}</span>\n      onUpdate<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// The operation can be denied</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>price <span class="token operator">></span> <span class="token number">2000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Price is limited to 2000€"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">// Call your API here</span>\n        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"UPDATE"</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      onDelete<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// The operation can be denied</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">"Are you sure you want to delete it?"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token comment">// Call your API here</span>\n        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"DELETE"</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      onInsert<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// The operation can be denied</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>product <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> item<span class="token punctuation">.</span>price <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Product and price are mandatory"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">// Call your API here</span>\n        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"INSERT"</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// The object can be modified before insertion</span>\n        <span class="token comment">// This is the ideal place to assign unique ids</span>\n        <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          <span class="token operator">...</span>item<span class="token punctuation">,</span>\n          id<span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1e6</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      format<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        <span class="token comment">// Some fields can have a custom display element</span>\n        <span class="token function-variable function">price</span><span class="token operator">:</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>value <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> €</span><span class="token template-punctuation string">`</span></span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">}</span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// Process the whole list</span>\n        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"DATA"</span><span class="token punctuation">,</span> items<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token comment">// Headers are customizable</span>\n      headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        price<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">price (€)</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token comment">// You can provide arbitrary props to be passed to the `input` element</span>\n      editProps<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        price<span class="token operator">:</span> <span class="token punctuation">{</span> min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> max<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span> step<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      className<span class="token operator">=</span><span class="token string">"table table-striped table-fixed align-middle"</span>\n      headClassName<span class="token operator">=</span><span class="token string">"table-light"</span>\n      inputClassName<span class="token operator">=</span><span class="token string">"w-100"</span>\n      thClassName<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        product<span class="token operator">:</span> <span class="token string">"col-3"</span><span class="token punctuation">,</span>\n        type<span class="token operator">:</span> <span class="token string">"col-2"</span><span class="token punctuation">,</span>\n        price<span class="token operator">:</span> <span class="token string">"col-3"</span><span class="token punctuation">,</span>\n        stock<span class="token operator">:</span> <span class="token string">"col-1"</span><span class="token punctuation">,</span>\n        <span class="token comment">// More place for the buttons</span>\n        buttons<span class="token operator">:</span> <span class="token string">"col-3"</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token comment">// You can provide arbitrary elements for buttons</span>\n      btnValidateElement<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">YES!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      btnCancelElement<span class="token operator">=</span><span class="token punctuation">{</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-2 btn btn-secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">NEVER</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">}</span>\n      btnDeleteElement<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">REMOVE</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n    <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}]);