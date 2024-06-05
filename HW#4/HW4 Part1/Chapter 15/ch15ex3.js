function asTabs(node) {
  const tabs = Array.from(node.children);

  // Create buttons for each tab
  tabs.forEach((tab, index) => {
    const button = document.createElement("button");
    button.textContent = tab.getAttribute("data-tabname");
    button.classList.add("tab-button");
    if (index === 0) {
      button.classList.add("selected");
    }
    button.addEventListener("click", () => selectTab(index));
    node.insertBefore(button, node.firstChild);
  });

  // Hide all tabs except the first one
  tabs.forEach((tab, index) => {
    if (index !== 0) {
      tab.classList.add("tab-content");
    }
  });

  // Function to select a tab
  function selectTab(index) {
    tabs.forEach((tab, tabIndex) => {
      if (tabIndex === index) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    const buttons = Array.from(node.querySelectorAll(".tab-button"));
    buttons.forEach((button, buttonIndex) => {
      if (buttonIndex === index) {
        button.classList.add("selected");
      } else {
        button.classList.remove("selected");
      }
    });
  }
}

asTabs(document.querySelector("tab-panel"));
