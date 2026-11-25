const feedback = document.querySelector("#feedback");

for (const choice of document.querySelectorAll("button[data-state]")) {
  choice.addEventListener("click", () => {
    feedback.textContent = choice.dataset.state === "open"
      ? "Correct. Assign a backup van owner and record their next step in the handoff."
      : "That item is already complete. Look for the unresolved issue without an owner.";
  });
}
