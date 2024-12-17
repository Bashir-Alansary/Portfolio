export type projectType = {
    id: number;
    name: string;
    category: string;
    img: string;
    gitLink: string;
    viewLink: string;
}

export const scrollUp = () :void => {
    window.scroll(0, 0);
}

export const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
}
