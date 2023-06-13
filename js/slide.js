document.addEventListener("DOMContentLoaded", function() {
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    const contentSections = document.querySelectorAll(".container2 .content");
    let currentTab = 0;
  
    function switchTab(index) {
      sidebarLinks.forEach(function(link) {
        link.classList.remove("active");
      });
      contentSections.forEach(function(section) {
        section.classList.remove("active");
      });
  
      currentTab = index;
  
      sidebarLinks[currentTab].classList.add("active");
      contentSections[currentTab].classList.add("active");
    }
  
    sidebarLinks.forEach(function(link, index) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        switchTab(index);
      });
    });
  
    function autoSwitchTab() {
      let nextTab = currentTab + 1;
      if (nextTab >= sidebarLinks.length) {
        nextTab = 0;
      }
      switchTab(nextTab);
    }
  
    const interval = setInterval(autoSwitchTab, 5000);
  });
  