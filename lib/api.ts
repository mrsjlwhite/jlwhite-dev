export const getGitConnectedPortfolio = async (): Promise<any> => {
    return await fetch('https://gitconnected.com/v1/portfolio/mrsjlwhite')
        .then(res => res.json())
        .catch((err) => console.error(`🚨Issue getting resume data: ${err}`));
}