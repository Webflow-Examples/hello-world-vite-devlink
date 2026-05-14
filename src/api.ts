export function setupApi(
  apiButton: HTMLButtonElement,
  apiResponse: HTMLParagraphElement
) {
  apiButton.addEventListener("click", async () => {
    apiResponse.textContent = "Loading...";
    try {
      const response = await fetch(`${__WF_BASE_URL__}api/hello`);
      const data = await response.json();
      apiResponse.textContent = JSON.stringify(data);
    } catch (error) {
      apiResponse.textContent = `Error: ${error}`;
    }
  });
}
