// Basic Function retrieved from https://www.w3schools.com/howto/howto_js_tabs.asp , modified by Shane Ducksbury

function openGalleryItem(evt, tabItem) {
    // Declare all variables
    let i, tabContent, tabLinks;
  
    // Get all elements with class="tab-content" and hide them
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabItem).style.display = "block";
    evt.currentTarget.className += " active";
  }

let allTabs = document.getElementsByClassName("tab-links")
allTabs[0].click()