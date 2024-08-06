import GitConnectedPortfolio from "core/interfaces/gitConnected";

export const getGitConnectedPortfolio = async (): Promise<GitConnectedPortfolio> => {
    return await fetch('https://gitconnected.com/v1/portfolio/mrsjlwhite')
        .then(res => res.json())
        .catch((err) => console.error(`🚨Issue getting resume data: ${err}`));
}