function openTab(tabName, btnName) {
  const projectTabContents = document.querySelectorAll(".project-tab-content");

  projectTabContents.forEach((tab) => {
    tab.classList.add("hidden");
  });

  const activeProjectTabContent = document.getElementById(tabName);
  activeProjectTabContent.classList.remove("hidden");

  const projectTabs = document.querySelectorAll(".tab-button");
  projectTabs.forEach((tab) => {
    if (tab.classList.contains("active-tab")) {
      tab.classList.remove("active-tab");
    }
  });
  const activeProjectTab = document.getElementById(btnName);
  activeProjectTab.classList.add("active-tab");
}
