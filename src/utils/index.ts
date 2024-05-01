export function darkMode() {
  if (
    localStorage.getItem("theme") &&
    localStorage.getItem("theme") == "dark"
  ) {
    localStorage.setItem("theme", "dark");
    document.querySelector("html")?.classList.remove("light");
    document.querySelector("html")?.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    document.querySelector("html")?.classList.remove("dark");
    document.querySelector("html")?.classList.add("light");
  }
}
