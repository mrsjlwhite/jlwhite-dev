export const navigateToSection = (event: any, sectionName: string) => {
    const section = document.getElementById(sectionName);
    event.preventDefault();
    section && section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(sectionName, sectionName, `/${sectionName}`);
}

export const openLink = (url: string) => window.open(url, '_blank', 'noreferrer');