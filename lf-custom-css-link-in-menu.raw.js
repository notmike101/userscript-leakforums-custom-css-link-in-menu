(function(){
    var workArea = document.querySelector('a[href="upgrade.php"]').parentNode.parentNode;
    var customCSSLink = document.createElement('li');
    customCSSLink.innerHTML = '<a href="customCSS.php">Custom CSS</a>';
    workArea.appendChild(customCSSLink);
})();
