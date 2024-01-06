import{_ as t,r as i,o,c as r,a as s,b as a,d as e,e as l}from"./app-rM-3rrR9.js";const p={},c=s("h2",{id:"安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),a(" 安装")],-1),d={href:"https://learn.microsoft.com/zh-cn/windows/wsl/install#install-wsl-command",target:"_blank",rel:"noopener noreferrer"},u=s("h2",{id:"配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),a(" 配置")],-1),h=s("h3",{id:"软件源",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#软件源","aria-hidden":"true"},"#"),a(" 软件源")],-1),v=s("p",null,"国内镜像源",-1),b={href:"https://mirror.tuna.tsinghua.edu.cn/help/debian/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mirrors.ustc.edu.cn/help/debian.html",target:"_blank",rel:"noopener noreferrer"},k=s("li",null,[s("p",null,"软件更新：")],-1),g=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="终端美化" tabindex="-1"><a class="header-anchor" href="#终端美化" aria-hidden="true">#</a> 终端美化</h3><ul><li>安装zsh，并将zsh设置为默认shell</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">zsh</span>
chsh <span class="token parameter variable">-s</span> /bin/zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装git和curl</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span> <span class="token function">curl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装oh-my-zsh（国内建议使用gitee镜像）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#github</span>
<span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>
<span class="token comment">#gitee</span>
<span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>更改zsh主题</li></ul>`,9),f={href:"https://github.com/ohmyzsh/ohmyzsh/wiki/themes",target:"_blank",rel:"noopener noreferrer"},_=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后找到ZSH_THEME配置项，将对应的键值设置为喜欢的主题即可</p><h3 id="配置终端代理-可选" tabindex="-1"><a class="header-anchor" href="#配置终端代理-可选" aria-hidden="true">#</a> 配置终端代理（可选）</h3><ul><li>localhost代理镜像配置：%HOMEPATH%目录下新建一个.wslconfig文件，写入以下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>experimental<span class="token punctuation">]</span>
<span class="token assign-left variable">autoMemoryReclaim</span><span class="token operator">=</span>gradual  
<span class="token assign-left variable">networkingMode</span><span class="token operator">=</span>mirrored
<span class="token assign-left variable">dnsTunneling</span><span class="token operator">=</span>true
<span class="token assign-left variable">firewall</span><span class="token operator">=</span>true
<span class="token assign-left variable">autoProxy</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重新启用子系统：在windows命令行中输入以下命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl <span class="token parameter variable">--shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>设置终端代理：打开Debian子系统终端输入以下命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span>http://<span class="token punctuation">{</span>proxy_server_ip<span class="token punctuation">}</span>:<span class="token punctuation">{</span>port<span class="token punctuation">}</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span>http://<span class="token punctuation">{</span>proxy_server_ip<span class="token punctuation">}</span>:<span class="token punctuation">{</span>port<span class="token punctuation">}</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span>socks5://<span class="token punctuation">{</span>proxy_server_ip<span class="token punctuation">}</span>:<span class="token punctuation">{</span>port<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function x(y,z){const n=i("ExternalLinkIcon");return o(),r("div",null,[c,s("p",null,[a("安装步骤请参考微软官方文档："),s("a",d,[a("WSL安装"),e(n)])]),u,h,s("ul",null,[s("li",null,[v,s("ol",null,[s("li",null,[s("p",null,[a("清华镜像站："),s("a",b,[a("Debian软件源"),e(n)])])]),s("li",null,[s("p",null,[a("中科大镜像站："),s("a",m,[a("Debian软件源"),e(n)])])])])]),k]),g,s("p",null,[a("默认主题是robbyrussell，可以通过以下方式修改 "),s("a",f,[a("主题"),e(n)])]),_])}const L=t(p,[["render",x],["__file","WSL2deanzhuangyupeizhi.html.vue"]]);export{L as default};
