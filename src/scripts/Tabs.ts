// chnge tabs on click
const tabs = document.querySelectorAll("[role=tab]");
const panels = document.querySelectorAll("[role=tabpanel]");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    if (!e.currentTarget) return;

    // deactivate all tabs
    tabs.forEach((tab) => tab.setAttribute("aria-selected", "false"));
    tabs.forEach((tab) => tab.setAttribute("data-active", "false"));
    // deactivate all panels
    panels.forEach((panel) => panel.setAttribute("aria-hidden", "true"));
    panels.forEach((panel) => panel.setAttribute("data-active", "false"));

    // activate clicked tab
    tab.setAttribute("aria-selected", "true");
    tab.setAttribute("data-active", "true");
    // activate clicked panel
    // get the tabindex property value of the clicked tab
    const id = tab.getAttribute("tabindex");

    // find the panel that matches the id and has the same tabindex value and is role=tabpanel
    const panel = document.querySelector(`[tabindex="${id}"][role="tabpanel"]`);

    panel?.setAttribute("aria-hidden", "false");
    panel?.setAttribute("data-active", "true");
  });
});

export {};
