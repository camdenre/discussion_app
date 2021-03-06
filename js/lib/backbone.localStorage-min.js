  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Backbone.localStorage/backbone.localStorage-min.js at master · jeromegn/Backbone.localStorage</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="GEMSLKWOSBKXsvcDvv0FnfseaXWMGx+DyLWowOjPbVU=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-407693f9f73c33bc72d72bf9656fbf5ae05597d3.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-56ff2781ae95d3a31c723b6774df51dd407ef091.css" media="screen" rel="stylesheet" type="text/css" />
    


        <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-d61440caec5d2210a2242b084cdb2bc6597e00b7.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-10bb27aa711348c17932dd3a2997237f40846e40.js" type="text/javascript"></script>
      

        <link rel='permalink' href='/jeromegn/Backbone.localStorage/blob/3c12cf6e54f9d92c65a771894d806dfb766f4b3c/backbone.localStorage-min.js'>
    <meta property="og:title" content="Backbone.localStorage"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/jeromegn/Backbone.localStorage"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/c96dbcc746d551ea0665da4a23536280?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="A localStorage adapter for Backbone.js. Contribute to Backbone.localStorage development by creating an account on GitHub."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="jeromegn/Backbone.localStorage"/>

    <meta name="description" content="A localStorage adapter for Backbone.js. Contribute to Backbone.localStorage development by creating an account on GitHub." />

  <link href="https://github.com/jeromegn/Backbone.localStorage/commits/master.atom" rel="alternate" title="Recent Commits to Backbone.localStorage:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob linux vis-public env-production  ">
    <div id="wrapper">

      

      

      

      


        <div class="header header-logged-in true">
          <div class="container clearfix">

            <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

            <div class="divider-vertical"></div>

              <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


              <div class="topsearch command-bar-activated ">
  <form accept-charset="UTF-8" action="/search" class="command_bar_form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="command-bar" placeholder="Search or type a command" tabindex="1" data-username="camdenre" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>
  <ul class="top-nav">
      <li class="explore"><a href="https://github.com/explore">Explore</a></li>
      <li><a href="https://gist.github.com">Gist</a></li>
      <li><a href="/blog">Blog</a></li>
    <li><a href="http://help.github.com">Help</a></li>
  </ul>
</div>


            

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/camdenre" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/200589529ad067be7e771651b6e03deb?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> camdenre
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
      </li>
    </ul>



            
          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="GEMSLKWOSBKXsvcDvv0FnfseaXWMGx+DyLWowOjPbVU=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1022555" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container js-select-menu-pane">

            <div class="select-menu-item js-navigation-item js-navigation-target selected">
              <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/jeromegn/Backbone.localStorage/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/jeromegn/Backbone.localStorage/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/jeromegn/Backbone.localStorage/stargazers">709</a>
    </li>

        <li>
          <a href="/jeromegn/Backbone.localStorage/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/jeromegn/Backbone.localStorage/network" class="social-count">238</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/jeromegn" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">jeromegn</span>
                  </a></span> /
                <strong><a href="/jeromegn/Backbone.localStorage" class="js-current-repository">Backbone.localStorage</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/jeromegn/Backbone.localStorage" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/jeromegn/Backbone.localStorage/network" highlight="repo_network">Network</a></li>
    <li><a href="/jeromegn/Backbone.localStorage/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>1</span></a></li>

      <li><a href="/jeromegn/Backbone.localStorage/issues" highlight="repo_issues">Issues <span class='counter'>4</span></a></li>

      <li><a href="/jeromegn/Backbone.localStorage/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/jeromegn/Backbone.localStorage/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/jeromegn/Backbone.localStorage/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">1</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container js-select-menu-pane">

        <div class="select-menu-modal js-select-menu-pane">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-select-menu-text-filter js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div> <!-- /.select-menu-text-filter -->
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-filter="branches" class="js-select-menu-tab selected">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list js-filter-tab js-filter-branches css-truncate" data-filterable-for="commitish-filter-field" data-filterable-type="substring">



              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/jeromegn/Backbone.localStorage/blob/gh-pages/backbone.localStorage-min.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target selected">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/jeromegn/Backbone.localStorage/blob/master/backbone.localStorage-min.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-no-results js-not-filterable">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list js-filter-tab js-filter-tags css-truncate" data-filterable-for="commitish-filter-field" data-filterable-type="substring" style="display:none;">

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/jeromegn/Backbone.localStorage/blob/1.1.0/backbone.localStorage-min.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.0" rel="nofollow" title="1.1.0">1.1.0</a>

              </div> <!-- /.select-menu-item -->

            <div class="select-menu-no-results js-not-filterable">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/jeromegn/Backbone.localStorage" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/jeromegn/Backbone.localStorage/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/jeromegn/Backbone.localStorage/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">2</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:6585dde79bc143becaed91c170165620 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:6585dde79bc143becaed91c170165620 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jeromegn/Backbone.localStorage" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">Backbone.localStorage</span></a></span></span> / <strong class="final-path">backbone.localStorage-min.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="backbone.localStorage-min.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/jeromegn/Backbone.localStorage/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/bf06c8e7ae32d802d2b77915c560668a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/phoey" rel="author">phoey</a></span>
    <time class="js-relative-date" datetime="2013-01-23T06:00:10-08:00" title="2013-01-23 06:00:10">January 23, 2013</time>
    <div class="commit-title">
        <a href="/jeromegn/Backbone.localStorage/commit/c0a9a71d124e81db345524aa05d6d588b05423de" class="message">added tests</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>11</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="jeromegn" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=jeromegn"><img height="20" src="https://secure.gravatar.com/avatar/c96dbcc746d551ea0665da4a23536280?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="nekman" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=nekman"><img height="20" src="https://secure.gravatar.com/avatar/456cb814a8326c1b223810d62535ca7a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="phoey" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=phoey"><img height="20" src="https://secure.gravatar.com/avatar/bf06c8e7ae32d802d2b77915c560668a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="dfcreative" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=dfcreative"><img height="20" src="https://secure.gravatar.com/avatar/a24f38a77a618758afe7656dc4c667d9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="juhovh" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=juhovh"><img height="20" src="https://secure.gravatar.com/avatar/c6b34122cd28545bf6798dbf8a17d671?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="sontek" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=sontek"><img height="20" src="https://secure.gravatar.com/avatar/848c8fa8f54256aa570becc90123bee2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="andriijas" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=andriijas"><img height="20" src="https://secure.gravatar.com/avatar/d132cd1b472750c37ffa4ba5b6bd462a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="4vanger" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=4vanger"><img height="20" src="https://secure.gravatar.com/avatar/bff933bdab4098061ca237d0926feb69?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="erichmenge" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=erichmenge"><img height="20" src="https://secure.gravatar.com/avatar/d309ddb80e1e28e6f8e3a9685d1f8b29?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="spiralman" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=spiralman"><img height="20" src="https://secure.gravatar.com/avatar/40024617164314f70f7584ac09b96c1d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="Dremora" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=Dremora"><img height="20" src="https://secure.gravatar.com/avatar/22113c3309f52145f02a7ff5c2736b1a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c96dbcc746d551ea0665da4a23536280?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jeromegn">jeromegn</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/456cb814a8326c1b223810d62535ca7a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/nekman">nekman</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/bf06c8e7ae32d802d2b77915c560668a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/phoey">phoey</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a24f38a77a618758afe7656dc4c667d9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/dfcreative">dfcreative</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c6b34122cd28545bf6798dbf8a17d671?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/juhovh">juhovh</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/848c8fa8f54256aa570becc90123bee2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/sontek">sontek</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/d132cd1b472750c37ffa4ba5b6bd462a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/andriijas">andriijas</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/bff933bdab4098061ca237d0926feb69?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/4vanger">4vanger</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/d309ddb80e1e28e6f8e3a9685d1f8b29?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/erichmenge">erichmenge</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/40024617164314f70f7584ac09b96c1d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/spiralman">spiralman</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/22113c3309f52145f02a7ff5c2736b1a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/Dremora">Dremora</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/jeromegn/Backbone.localStorage/blob/3c12cf6e54f9d92c65a771894d806dfb766f4b3c/backbone.localStorage-min.js" data-title="Backbone.localStorage/backbone.localStorage-min.js at master · jeromegn/Backbone.localStorage · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>1 lines (1 sloc)</span>
                <span>3.138 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/jeromegn/Backbone.localStorage/edit/master/backbone.localStorage-min.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/jeromegn/Backbone.localStorage/raw/master/backbone.localStorage-min.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/jeromegn/Backbone.localStorage/blame/master/backbone.localStorage-min.js" class="button minibutton ">Blame</a>
                  <a href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">root</span><span class="p">,</span><span class="nx">factory</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span><span class="o">===</span><span class="s2">&quot;function&quot;</span><span class="o">&amp;&amp;</span><span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">){</span><span class="nx">define</span><span class="p">([</span><span class="s2">&quot;underscore&quot;</span><span class="p">,</span><span class="s2">&quot;backbone&quot;</span><span class="p">],</span><span class="kd">function</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span><span class="nx">Backbone</span><span class="p">){</span><span class="k">return</span> <span class="nx">factory</span><span class="p">(</span><span class="nx">_</span><span class="o">||</span><span class="nx">root</span><span class="p">.</span><span class="nx">_</span><span class="p">,</span><span class="nx">Backbone</span><span class="o">||</span><span class="nx">root</span><span class="p">.</span><span class="nx">Backbone</span><span class="p">)})}</span><span class="k">else</span><span class="p">{</span><span class="nx">factory</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span><span class="nx">Backbone</span><span class="p">)}})(</span><span class="k">this</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span><span class="nx">Backbone</span><span class="p">){</span><span class="kd">function</span> <span class="nx">S4</span><span class="p">(){</span><span class="k">return</span><span class="p">((</span><span class="mi">1</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">())</span><span class="o">*</span><span class="mi">65536</span><span class="o">|</span><span class="mi">0</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">).</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">guid</span><span class="p">(){</span><span class="k">return</span> <span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="nx">S4</span><span class="p">()}</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">Store</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">=</span><span class="nx">name</span><span class="p">;</span><span class="kd">var</span> <span class="nx">store</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="o">=</span><span class="nx">store</span><span class="o">&amp;&amp;</span><span class="nx">store</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">)</span><span class="o">||</span><span class="p">[]};</span><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,{</span><span class="nx">save</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">setItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">))},</span><span class="nx">create</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">){</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="nx">guid</span><span class="p">();</span><span class="nx">model</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">idAttribute</span><span class="p">,</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">)}</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">setItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">model</span><span class="p">));</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">());</span><span class="k">this</span><span class="p">.</span><span class="nx">save</span><span class="p">();</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">model</span><span class="p">)},</span><span class="nx">update</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">setItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">model</span><span class="p">));</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">include</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">,</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">()))</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">());</span><span class="k">this</span><span class="p">.</span><span class="nx">save</span><span class="p">();</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">model</span><span class="p">)},</span><span class="nx">find</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">jsonData</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">))},</span><span class="nx">findAll</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">_</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">).</span><span class="nx">chain</span><span class="p">().</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">jsonData</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">id</span><span class="p">))},</span><span class="k">this</span><span class="p">).</span><span class="nx">compact</span><span class="p">().</span><span class="nx">value</span><span class="p">()},</span><span class="nx">destroy</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">isNew</span><span class="p">())</span><span class="k">return</span> <span class="kc">false</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">removeItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">){</span><span class="k">return</span> <span class="nx">id</span><span class="o">===</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">()});</span><span class="k">this</span><span class="p">.</span><span class="nx">save</span><span class="p">();</span><span class="k">return</span> <span class="nx">model</span><span class="p">},</span><span class="nx">localStorage</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">localStorage</span><span class="p">},</span><span class="nx">jsonData</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">){</span><span class="k">return</span> <span class="nx">data</span><span class="o">&amp;&amp;</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">data</span><span class="p">)}});</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="p">.</span><span class="nx">sync</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">Store</span><span class="p">.</span><span class="nx">sync</span><span class="o">=</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">localSync</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span><span class="nx">model</span><span class="p">,</span><span class="nx">options</span><span class="p">){</span><span class="kd">var</span> <span class="nx">store</span><span class="o">=</span><span class="nx">model</span><span class="p">.</span><span class="nx">localStorage</span><span class="o">||</span><span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">;</span><span class="kd">var</span> <span class="nx">resp</span><span class="p">,</span><span class="nx">errorMessage</span><span class="p">,</span><span class="nx">syncDfd</span><span class="o">=</span><span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="o">&amp;&amp;</span><span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">();</span><span class="k">try</span><span class="p">{</span><span class="k">switch</span><span class="p">(</span><span class="nx">method</span><span class="p">){</span><span class="k">case</span><span class="s2">&quot;read&quot;</span><span class="o">:</span><span class="nx">resp</span><span class="o">=</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="o">!=</span><span class="kc">undefined</span><span class="o">?</span><span class="nx">store</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span><span class="o">:</span><span class="nx">store</span><span class="p">.</span><span class="nx">findAll</span><span class="p">();</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;create&quot;</span><span class="o">:</span><span class="nx">resp</span><span class="o">=</span><span class="nx">store</span><span class="p">.</span><span class="nx">create</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;update&quot;</span><span class="o">:</span><span class="nx">resp</span><span class="o">=</span><span class="nx">store</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;delete&quot;</span><span class="o">:</span><span class="nx">resp</span><span class="o">=</span><span class="nx">store</span><span class="p">.</span><span class="nx">destroy</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span><span class="k">break</span><span class="p">}}</span><span class="k">catch</span><span class="p">(</span><span class="nx">error</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">error</span><span class="p">.</span><span class="nx">code</span><span class="o">===</span><span class="nx">DOMException</span><span class="p">.</span><span class="nx">QUOTA_EXCEEDED_ERR</span><span class="o">&amp;&amp;</span><span class="nb">window</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">.</span><span class="nx">length</span><span class="o">===</span><span class="mi">0</span><span class="p">)</span><span class="nx">errorMessage</span><span class="o">=</span><span class="s2">&quot;Private browsing is unsupported&quot;</span><span class="p">;</span><span class="k">else</span> <span class="nx">errorMessage</span><span class="o">=</span><span class="nx">error</span><span class="p">.</span><span class="nx">message</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">resp</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="o">&amp;&amp;</span><span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">VERSION</span><span class="o">===</span><span class="s2">&quot;0.9.10&quot;</span><span class="p">){</span><span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span><span class="nx">resp</span><span class="p">,</span><span class="nx">options</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">resp</span><span class="p">)}</span><span class="k">if</span><span class="p">(</span><span class="nx">syncDfd</span><span class="p">)</span><span class="nx">syncDfd</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">resp</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">errorMessage</span><span class="o">=</span><span class="nx">errorMessage</span><span class="o">?</span><span class="nx">errorMessage</span><span class="o">:</span><span class="s2">&quot;Record Not Found&quot;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="o">&amp;&amp;</span><span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">VERSION</span><span class="o">===</span><span class="s2">&quot;0.9.10&quot;</span><span class="p">){</span><span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span><span class="nx">errorMessage</span><span class="p">,</span><span class="nx">options</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">errorMessage</span><span class="p">)}</span><span class="k">if</span><span class="p">(</span><span class="nx">syncDfd</span><span class="p">)</span><span class="nx">syncDfd</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">errorMessage</span><span class="p">)}</span><span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="o">&amp;&amp;</span><span class="nx">options</span><span class="p">.</span><span class="nx">complete</span><span class="p">)</span><span class="nx">options</span><span class="p">.</span><span class="nx">complete</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span><span class="k">return</span> <span class="nx">syncDfd</span><span class="o">&amp;&amp;</span><span class="nx">syncDfd</span><span class="p">.</span><span class="nx">promise</span><span class="p">()};</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">ajaxSync</span><span class="o">=</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">sync</span><span class="p">;</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">getSyncMethod</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">localStorage</span><span class="o">||</span><span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="o">&amp;&amp;</span><span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">){</span><span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">localSync</span><span class="p">}</span><span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">ajaxSync</span><span class="p">};</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">sync</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span><span class="nx">model</span><span class="p">,</span><span class="nx">options</span><span class="p">){</span><span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">getSyncMethod</span><span class="p">(</span><span class="nx">model</span><span class="p">).</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,[</span><span class="nx">method</span><span class="p">,</span><span class="nx">model</span><span class="p">,</span><span class="nx">options</span><span class="p">])};</span><span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="p">});</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543525" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.06647s from fe17.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/jeromegn/Backbone.localStorage/suggestions/commit/3c12cf6e54f9d92c65a771894d806dfb766f4b3c">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.06708' data-host='fe17'></span>
    
  </body>
</html>

